<?php

if (isset($_POST['email']))
    $email = $_POST['email'];
if (isset($_POST['message']))
    $message = $_POST['message'];

header('Content-Type: application/json');

if ($email === '') {
    print json_encode(['message' => 'Le champ email ne peut pas être vide.', 'code' => 0]);
    exit();
} else {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        print json_encode(['message' => 'Le format de l\'email est invalide', 'code' => 0]);
        exit();
    }
}

if ($message === '') {
    print json_encode(['message' => 'Le champ message ne peut pas être vide.', 'code' => 0]);
    exit();
}

$content = "From Email: $email \n Message: $message";
$mymail = 'stefanspeter26@gmail.com';
$mailheader = "From: $email \r\n";
$subject = 'New message from the website';

mail($mymail, $subject, $content, $mailheader) or die("Erreur!");
print json_encode(['message' => 'Votre mail a été envoyé!', 'code' => 1]);
exit();
