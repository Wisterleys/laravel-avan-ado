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


Route::get('/', "PrincipalController@principal")->name("site.index");
Route::get('/sobrenos', "SobreNosController@sobrenos")->name("site.sobre");
Route::get('/contato', "ContatoController@contato")->name("site.contato");

Route::prefix("/app")->group(function(){
    Route::get('/login', function(){return "login";})->name("app.login");
    Route::get('/clientes', function(){return "clientes";})->name("app.cliente");
    Route::get('/fornecedores', function(){return "fornecedores";})->name("app.fornec");
    Route::get('/produtos', function(){return "produtos";})->name("app.produtos");
});
Route::fallback(function(){
    echo "A rota que tentou alcançar não existe. Volte para a pagina principal clicando <a href='".route('site.index')."'>aqui</a>";
});
