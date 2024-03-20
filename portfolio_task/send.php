
<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validate email 
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address";
        exit;
    }

    // Send email
    $to = "ayman.a.m.alnajjar@email.com";
    $subject = "New message from your portfolio website";
    $headers = "From: $email";
    $success = mail($to, $subject, $message, $headers);

    if ($success) {
        echo "Message sent successfully!";
    } else {
        echo "Error sending message. Please try again later.";
    }
}
