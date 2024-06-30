<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cities = [
            [
                'name' => 'Semarang',
            ],
            [
                'name' => 'Jakarta',
            ],
            [
                'name' => 'Bandung',
            ],
            [
                'name' => 'Surabaya',
            ],
            [
                'name' => 'Yogyakarta',
            ],
            [
                'name' => 'Malang',
            ],
            [
                'name' => 'Solo',
            ],
            [
                'name' => 'Bekasi',
            ],
            [
                'name' => 'Tangerang',
            ],
            [
                'name' => 'Depok',
            ],
            [
                'name' => 'Cirebon',
            ],
            [
                'name' => 'Pekalongan',
            ],
        ];

        foreach ($cities as $city) {
            City::create($city);
        }
    }
}