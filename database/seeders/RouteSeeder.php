<?php

namespace Database\Seeders;

use App\Models\Route;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class RouteSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $routes = [
            [
                'departure_city' => 'Semarang',
                'arrival_city' => 'Yogyakarta',
                'distance' => 120.0, // Distance in kilometers
                'duration' => '02:30:00', // Duration in HH:MM:SS format
                'price' => 100000.00, // Price in Indonesian Rupiah
            ],
            [
                'departure_city' => 'Surabaya',
                'arrival_city' => 'Malang',
                'distance' => 100.0, // Distance in kilometers
                'duration' => '02:00:00', // Duration in HH:MM:SS format
                'price' => 80000.00, // Price in Indonesian Rupiah
            ],
            [
                'departure_city' => 'Solo',
                'arrival_city' => 'Kediri',
                'distance' => 150.0, // Distance in kilometers
                'duration' => '03:00:00', // Duration in HH:MM:SS format
                'price' => 120000.00, // Price in Indonesian Rupiah
            ],
            [
                'departure_city' => 'Purwokerto',
                'arrival_city' => 'Banyuwangi',
                'distance' => 300.0, // Distance in kilometers
                'duration' => '05:00:00', // Duration in HH:MM:SS format
                'price' => 250000.00, // Price in Indonesian Rupiah
            ],
            [
                'departure_city' => 'Magelang',
                'arrival_city' => 'Jember',
                'distance' => 280.0, // Distance in kilometers
                'duration' => '05:30:00', // Duration in HH:MM:SS format
                'price' => 220000.00, // Price in Indonesian Rupiah
            ],
            [
                'departure_city' => 'Pekalongan',
                'arrival_city' => 'Probolinggo',
                'distance' => 350.0, // Distance in kilometers
                'duration' => '06:00:00', // Duration in HH:MM:SS format
                'price' => 280000.00, // Price in Indonesian Rupiah
            ],
            [
                'departure_city' => 'Tegal',
                'arrival_city' => 'Situbondo',
                'distance' => 400.0, // Distance in kilometers
                'duration' => '07:00:00', // Duration in HH:MM:SS format
                'price' => 320000.00, // Price in Indonesian Rupiah
            ],
            [
                'departure_city' => 'Brebes',
                'arrival_city' => 'Pasuruan',
                'distance' => 450.0, // Distance in kilometers
                'duration' => '08:00:00', // Duration in HH:MM:SS format
                'price' => 350000.00, // Price in Indonesian Rupiah
            ],
            [
                'departure_city' => 'Kudus',
                'arrival_city' => 'Mojokerto',
                'distance' => 320.0, // Distance in kilometers
                'duration' => '06:00:00', // Duration in HH:MM:SS format
                'price' => 260000.00, // Price in Indonesian Rupiah
            ]
            ];
            foreach ($routes as $route) {
                Route::create($route);
            }

    }
}