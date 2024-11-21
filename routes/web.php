<?php

use App\Http\Controllers\ListController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfileController;
use App\Models\Pelajaran;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/pelajaran', function () {
    $pelajarans = Pelajaran::all();

    return Inertia::render('Pelajaran', [
        'pelajarans' => $pelajarans
    ]);
});

// ======================AUTH=========================================


// Admin
Route::middleware(['auth', 'userAccess:Admin'])->group(function () {
    Route::get('/admin', function () {
        return Inertia::render('Admin');
    });
});

// Ustadz
Route::middleware(['auth', 'userAccess:Ustadz'])->group(function () {
    Route::get('/ustadz', function () {
        return Inertia::render('Ustadz');
    });
});

// Users
Route::middleware(['auth', 'userAccess:Users|Admin'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

// ====================================================================


// ===================CRUD============================================

Route::get('/list-product', [ListController::class, 'index'])->name('list-product.index');
Route::post('/list-product/create', [ListController::class, 'create'])->name('list-product.create');
Route::delete('/list-product/{id}', [ListController::class, 'destroy'])->name('list-product.destroy');

// ===================MIDTRANS============================================

Route::get('/order', [OrderController::class, 'index'])->name('order.index');
Route::post('/checkout', [OrderController::class, 'checkout'])->name('order.checkout');
Route::get('/deatil-checkout', [OrderController::class, 'deatil'])->name('order.deatil.checkout');
Route::get('/invoice/{id}', [OrderController::class, 'invoice'])->name('invoice.checkout');





// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
