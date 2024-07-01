<?php

namespace App\Http\Controllers\HomeController;

use App\Http\Controllers\Controller;
use App\Models\Driver;
use App\Models\Fleet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class About extends Controller
{
    public function index()
    {
        $data =[
            'fleets' => Fleet::all(),
            'driver' => Driver::all()
        ];
       return Inertia::render('Home/About',$data);
    }
}