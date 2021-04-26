<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/',function(){return view('auth.login');});

Route::get('/get/{email}',function($email){
    $email = DB::table('noticias')->select('titulo','corpo')->where('email',$email)->get();
    echo json_encode($email);
});
Route::post('/post',function(Request $request){
    //$email = DB::table('users')->where('email',$email)->get();
    echo json_encode($request);
});

Route::fallback(function(){return view('fallback');});
