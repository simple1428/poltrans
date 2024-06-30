<?php

namespace Database\Seeders;

use App\Models\Fleet;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FleetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $fleetData = [
            [
                'fleet_type' => 'bus',
                'fleet_name' => 'CityLiner',
                'fleet_number' => 'BPL_P1', // Generated fleet number
                'license_plate' => 'CC-5678-EF',
                'capacity' => 35,
                'description' => 'Comfortable intercity bus with reclining seats and AC.',
                'kir_letter' => 'fedcba09-8765-4321-1234-567890abcdef', // Replace with your actual data
                'maintenance_card' => '01234567-89ab-cdef-1234-567890abcdef', // Replace with your actual data
                'image' => 'https://example.com/bus2.jpg', // Replace with your actual image URL
                'is_active' => true,
            ],
            [
                'fleet_type' => 'travel',
                'fleet_name' => 'Island Hopper',
                'fleet_number' => 'TPL_P1', // Generated fleet number
                'license_plate' => 'DD-8901-GH',
                'capacity' => 12,
                'description' => 'Luxury travel van for island getaways.',
                'kir_letter' => '12345678-fedc-ba09-8765-4321abcdef', // Replace with your actual data
                'maintenance_card' => '23456789-0fed-cba9-8765-4321abcdef', // Replace with your actual data
                'image' => 'https://example.com/travel2.jpg', // Replace with your actual image URL
                'is_active' => true,
            ],
            [
                'fleet_type' => 'bus',
                'fleet_name' => 'Mountain Climber',
                'fleet_number' => 'BPL_P2', // Generated fleet number
                'license_plate' => 'EE-1234-JK',
                'capacity' => 48,
                'description' => 'Sturdy bus for adventurous mountain trips.',
                'kir_letter' => '34567890-ba09-8765-fedc-3456abcdef', // Replace with your actual data
                'maintenance_card' => '45678901-cba9-8765-fedc-3456abcdef', // Replace with your actual data
                'image' => 'https://example.com/bus3.jpg', // Replace with your actual image URL
                'is_active' => true,
            ],
            [
                'fleet_type' => 'travel',
                'fleet_number' => 'TPL_P2', // Generated fleet number
                'fleet_name' => 'Cozy Commuter',
                'license_plate' => 'FF-4567-LM',
                'capacity'  => 8,
                'description' => 'Compact and comfortable travel van for daily commutes.',
                'kir_letter' => '56789012-3456-fedc-ba09-8765abcdef', // Replace with your actual data
                'maintenance_card' => '67890123-4567-cba9-8765-fedcabcdef', // Replace with your actual data
                'image' => 'https://example.com/travel3.jpg', // Replace with your actual image URL
                'is_active' => true,
            ],
        ];

        foreach ($fleetData as $fleet) {
            Fleet::create($fleet);
        }
    }
}