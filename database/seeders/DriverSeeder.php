<?php

namespace Database\Seeders;

use App\Models\Driver;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DriverSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $drivers = [
            [
                'full_name' => 'John Doe',
                'email' => 'john.doe@example.com',
                'phone_number' => '(123) 456-7890',
                'image' => 'https://example.com/driver1.jpg',
                'sim_card_image' => 'https://example.com/sim1.jpg',
                'flying_hour' => null, // Replace with actual flying hours if applicable (time format)
                'trip_count' => null, // Replace with actual trip count if applicable
                'date_of_birth' => '1990-01-01', // Replace with actual date of birth
                'status' => 'active',
            ],
            [
                'full_name' => 'Jane Smith',
                'email' => 'jane.smith@example.com',
                'phone_number' => '(456) 789-0123',
                'image' => 'https://example.com/driver2.jpg',
                'sim_card_image' => 'https://example.com/sim2.jpg',
                'flying_hour' => null, // Replace with actual flying hours if applicable (time format)
                'trip_count' => null, // Replace with actual trip count if applicable
                'date_of_birth' => '1995-02-14', // Replace with actual date of birth
                'status' => 'active',
            ],
            [
                'full_name' => 'Michael Brown',
                'email' => 'michael.brown@example.com',
                'phone_number' => '(789) 012-3456',
                'image' => 'https://example.com/driver3.jpg',
                'sim_card_image' => 'https://example.com/sim3.jpg',
                'flying_hour' => '08:00:00', // Replace with actual flying hours if applicable (time format)
                'trip_count' => 50, // Replace with actual trip count if applicable
                'date_of_birth' => '1985-07-23', // Replace with actual date of birth
                'status' => 'active',
            ],
            [
                'full_name' => 'Ashley Williams',
                'email' => 'ashley.williams@example.com',
                'phone_number' => '(012) 345-6789',
                'image' => 'https://example.com/driver4.jpg',
                'sim_card_image' => 'https://example.com/sim4.jpg',
                'flying_hour' => '05:30:00', // Replace with actual flying hours if applicable (time format)
                'trip_count' => 20, // Replace with actual trip count if applicable
                'date_of_birth' => '2000-05-12', // Replace with actual date of birth
                'status' => 'active',
            ],
            [
                'full_name' => 'David Miller',
                'email' => 'david.miller@example.com',
                'phone_number' => '(567) 890-1234',
                'image' => 'https://example.com/driver5.jpg',
                'sim_card_image' => 'https://example.com/sim5.jpg',
                'flying_hour' => null, // Replace with actual flying hours if applicable (time format)
                'trip_count' => null, // Replace with actual trip count if applicable
                'date_of_birth' => '1992-11-08', // Replace with actual date of birth
                'status' => 'inactive',
            ],
        ];

        foreach ($drivers as $driver) {
            Driver::create($driver);
        }
    }
}