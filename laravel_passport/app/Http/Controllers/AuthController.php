<?php

namespace App\Http\Controllers;

use App\Http\Requests\ForgetRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\ResetRequest;
use App\Mail\ForgetMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try{
            if(Auth::attempt($request->only('email','password'))){
                $user = Auth::user();
                /** @var \App\Models\User $user **/
                $token = $user->createToken('app')->accessToken;

                return response([
                    'message' => 'Successfully Log In',
                    'token' => $token,
                    'user' => $user
                ],200);
            }
        }
        catch (Exception $exception)
        {
            return response([
                'message' => $exception->getMessage()
            ],400);
        }

        return response([
            'message' => 'Invalid Email or Password !'
        ],401);
    }

    public function register(RegisterRequest $request)
    {
        try{
                $user = User::create([
                    'name' => $request->name,
                    'email' => $request->email,
                    'password' => Hash::make($request->password)
                ]);
                $token = $user->createToken('app')->accessToken;

                return response([
                    'message' => 'Successfully Registered',
                    'token' => $token,
                    'user' => $user
                ],200);
            }catch (Exception $exception){
                return response([
                    'message' => $exception->getMessage()
                ],400);
            }

        return response([
            'message' => 'Something Went !'
        ],401);
    }

    public function ForgetPassword(ForgetRequest $request){
    	$email = $request->email;

    	if (User::where('email',$email)->doesntExist()) {
    		return response([
    			'message' => 'Email Invalid'
    		],401);
    	}

    	// generate Randome Token
    	$token = rand(10,100000);

    	try{
    		DB::table('password_resets')->insert([
    			'email' => $email,
    			'token' => $token
    		]);

    		// Mail Send to User
    		Mail::to($email)->send(new ForgetMail($token));

    		return response([
    			'message' => 'Reset Password Mail send on your email'
    		],200);

    	}catch(Exception $exception){
    		return response([
    			'message' => $exception->getMessage()
    		],400);
    	}
    } // end mehtod

    public function ResetPassword(ResetRequest $request){

    	$email = $request->email;
    	$token = $request->token;
    	$password = Hash::make($request->password);

    	$emailcheck = DB::table('password_resets')->where('email',$email)->first();
    	$pincheck = DB::table('password_resets')->where('token',$token)->first();

    	if (!$emailcheck) {
    		return response([
    			'message' => "Email Not Found"
    		],401);
    	 }
    	 if (!$pincheck) {
    		return response([
    			'message' => "Pin Code Invalid"
    		],401);
    	 }

    	 DB::table('users')->where('email',$email)->update(['password' => $password]);
    	 DB::table('password_resets')->where('email',$email)->delete();

    	 return response([
    	 	'message' => 'Password Change Successfully'
    	 ],200);


    }// end method
}
