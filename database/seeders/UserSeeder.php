<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
         $users = [
            [
                'name' => 'Admin',
                'email' => 'admin@localhost',
                'password' => bcrypt('password'),
                'role' => 'admin',
            ]
         ];
         foreach ($users as $key => $value) {
             \App\Models\User::create($value);
         }
    }
}
