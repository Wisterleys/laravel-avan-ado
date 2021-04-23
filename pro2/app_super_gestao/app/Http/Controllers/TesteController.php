<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TesteController extends Controller
{
    public function teste($p1, $p2){
        return "teste recebendo p1: $p1 e p2: $p2";
    }
}
