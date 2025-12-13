<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
$config = require __DIR__ . './secret/config.php';//nanti harus di ubah sesuai letak file config.php


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'mail.saiful-bahri.pro';
        $mail->SMTPAuth   = true;
        $mail->Username   = $config['email'];
        $mail->Password   = $config['password'];
        $mail->SMTPSecure = 'ssl';  // GUNAKAN ssl sesuai konfigurasi
        $mail->Port       = 465;

        $mail->setFrom('contact@saiful-bahri.pro', 'Saiful Bahri Website');
        $mail->addAddress('contact@saiful-bahri.pro');

        $name    = $_POST['name'];
        $email   = $_POST['email'];
        $message = $_POST['message'];
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Request';
        $mail->Body    = "
            <strong>Name:</strong> $name<br>
            <strong>Email:</strong> $email<br><br>
            <strong>Message:</strong><br>$message
        ";

        $mail->send();
        echo "success";
        exit;
    } catch (Exception $e) {
        echo "Mailer Error: {$mail->ErrorInfo}";
        exit;
    }
}
?>