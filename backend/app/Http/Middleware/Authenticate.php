<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Support\Facades\Auth;

class Authenticate extends Middleware
{
    // add this method
    protected function shouldPassThrough($request)
    {
        list($class, $method) = explode('@', $request->route()->getActionName());
        $exceptedActions = config('sanctum.expected.routes') ?: [];
        foreach ($exceptedActions as $key => $exception) {
            if($key == $class && in_array($method, $exception)) {
                return true;
            }
        }

        return false;
    }

    // edit your handle method:
    public function handle($request, Closure $next, ...$guards)
    {
        if(!$this->shouldPassThrough($request)) {
            $this->authenticate($request, $guards);
        }

        return $next($request);
    }

    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
        if (!$request->expectsJson()) {
            return route('login');
        }
    }
}
