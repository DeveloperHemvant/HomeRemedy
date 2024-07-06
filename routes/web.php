<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});
Route::get('/terms', function () {
    return Inertia::render('Frontend/termsconditions');
});
Route::get('/privacypolicies', function () {
    return Inertia::render('Frontend/privacypolicy');
});
Route::get('/notification-privacypolicies', function () {
    return Inertia::render('Frontend/notificationpolicies');
});
Route::get('/notification-conditions', function () {
    return Inertia::render('Frontend/notificationterms');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
