<?php

namespace App\Http\Controllers\HomeController;

use App\Http\Controllers\Controller;
use App\Models\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Index extends Controller
{
    public function index()
    {
        $data =[
            'routes' => Route::all()
        ];
        return Inertia::render('Home/Index',$data);
    }
}