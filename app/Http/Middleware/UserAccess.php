<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UserAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next,$userType): Response
    {
         $userTypesArray = explode('|', $userType);

          if (auth()->check() && in_array(auth()->user()->type, $userTypesArray)) {
            return $next($request);
        }

        // Redirect back if the user does not have the correct access
        return redirect()->back()->with('error', 'Unauthorized access');
    }
}
