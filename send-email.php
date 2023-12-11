<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'libs/PHPMailer/Exception.php';
require 'libs/PHPMailer/PHPMailer.php';
require 'libs/PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $htmlContent = $_POST["htmlContent"];

    $mail = new PHPMailer(true);

    try {
        // Configura el servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';  // Puedes usar Gmail: smtp.gmail.com
        $mail->SMTPAuth = true;
        $mail->Username = 'aecamilleri@gmail.com';
        $mail->Password = '';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Configura el correo
        $mail->setFrom('aecamilleri@gmail.com', 'Test');
        $mail->addAddress('aecamilleri@gmail.com');
        $mail->Subject = 'Asunto del Correo';
        $mail->isHTML(true);
        $mail->Body = $htmlContent;

        // Envía el correo
        $mail->send();
        echo "Correo electrónico enviado con éxito.";
    } catch (Exception $e) {
        echo "Error al enviar el correo electrónico: {$mail->ErrorInfo}";
    }
}
?>
