<?php

namespace Database\Seeders;

use App\Models\Pelajaran;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PelajaranSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $data =[
            ['name' => 'Matematik',],
            ['name' => 'Fisika' ],
            ['name' => 'Kimia',]
            ];

            foreach($data as  $value){
                Pelajaran::create($value);
            }


    }
}
