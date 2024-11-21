<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Pelajaran extends Model
{
    use HasFactory, HasUuids;
    protected $fillable = [
        'name',
        'created_at',
        'updated_at',
        'id',
        'auto_id'
    ];
}
