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


//Route::get('/', "PrincipalController@principal");
Route::get('/{nome}/{id}', function(string $nome, int $id){
    echo "seu nome é $nome e seu id é $id";
})->where("nome","[A-Za-z]+")->where("id","[0-9]+");
Route::get('/sobrenos', "SobreNosController@sobrenos");
Route::get('/contato', "ContatoController@contato");
