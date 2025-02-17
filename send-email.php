<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "fortunatekeratilwechynq@gmail.com";
    $subject = "New Contact Form Submission";
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $body = "You have received a new message from $name.\n\n".
            "Email: $email\n\n".
            "Message:\n$message";

    if (mail($to, $subject, $body)) {
        echo "Message sent successfully!";
    } else {
        echo "There was an error sending the message.";
    }
}
?>
