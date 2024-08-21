<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\contactosControler; 

Route::get('/user',[contactosControler::class,"index"]);

Route::get('/usuarios', function (Request $request) {
    return "Bienvenidos a mi API REST en laravel 11";
});

Route::get('/usuarios/{id}', function (Request $request) {
    return "Usuario no encontrado";
});

Route::post('/usuarios', function (Request $request) {
    return "Creando Usuarios";
});

Route::put('/usuarios/{id}', function (Request $request) {
    return "Actualizando Usuarios";
});

Route::delete('/usuarios/{id}', function (Request $request) {
    return "Borrando Usuarios";
});