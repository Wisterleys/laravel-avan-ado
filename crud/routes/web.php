<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NoriciaController;

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

Route::get('/getemail',function(){
    $email = DB::table('noticias')->select('titulo','corpo')->where('email',auth()->user()->email)->get();
    echo json_encode($email);
});

Route::post('poster', [App\Http\Controllers\NoriciaController::class, 'store']);
Route::resource('posts', NoriciaController::class);

Route::fallback(function(){return view('fallback');});
