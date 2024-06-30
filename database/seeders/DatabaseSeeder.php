<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::create(
            [
                'name' => 'Test',
                'NIK' => '1234567890123456',
                'phoneNumber' => '089619080300',
                'email' => 'test@gmail.com',
                'password' => bcrypt('test123'),
                'role'=> 1
            ]
            );
            $this->call([
                CitySeeder::class,
                FleetSeeder::class,
                DriverSeeder::class,
                RouteSeeder::class,
            ]);
    }
}