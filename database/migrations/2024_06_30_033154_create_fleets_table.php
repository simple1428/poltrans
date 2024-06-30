<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('fleets', function (Blueprint $table) {
            $table->id();
            $table->enum('fleet_type', ['bus', 'travel']);
            $table->string('fleet_name');
            $table->string('fleet_number')->unique();
            $table->string('license_plate');
            $table->unsignedInteger('capacity');
            $table->text('description')->nullable();
            $table->string('kir_letter')->nullable();
            $table->string('maintenance_card')->nullable();
            $table->string('image')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fleets');
    }
};