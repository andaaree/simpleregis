<?php

namespace App\Providers;

use App\Mail\CustomVerifyEmail;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Intercept the VerifyEmail notification
        VerifyEmail::toMailUsing(function (object $notifiable, string $url) {
            // Return your custom Mailable instead of the default MailMessage
            return (new CustomVerifyEmail($url))
                ->to($notifiable->email);
        });

        Vite::prefetch(concurrency: 3);
    }
}
