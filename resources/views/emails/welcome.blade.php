<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
</head>
<body style="font-family: Arial, sans-serif; padding: 20px;">
    <h1>Welcome, {{ $user->name }}!</h1>
    <p>We are thrilled to have you on board.</p>
    <p>Feel free to explore your dashboard and set up your profile.</p>

    <a href="{{ route('dashboard') }}" style="background-color: #008CBA; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
        Go to Dashboard
    </a>
</body>
</html>
