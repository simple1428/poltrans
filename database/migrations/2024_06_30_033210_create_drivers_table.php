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
        Schema::create('drivers', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('email')->unique();
            $table->string('phone_number');
            $table->string('image')->nullable()->comment('Driver profile image');
            $table->string('sim_card_image')->nullable()->comment('SIM card image');
            $table->time('flying_hour')->nullable()->comment('Total flying hour');
            $table->integer('trip_count')->nullable()->comment('Total trip count');
            $table->date('date_of_birth')->nullable()->comment('Driver date of birth');
            $table->enum('status', ['active', 'inactive'])->default('active')->comment('Driver status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('drivers');
    }
};