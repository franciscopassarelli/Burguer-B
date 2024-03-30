<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $mail = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
    $mensaje .= "Su e-mail es: " . $mail . ",\r\n";
    $mensaje .= "Mensaje: " . $mensaje . ",\r\n"; // Usar la variable $mensaje definida anteriormente
    $mensaje .= "Enviado el " . date('d/m/Y', time());

    $para = 'franciscopassarelli7@gmail.com';
    $asunto = 'Este email fue enviado desde la web';

    $headers = "From: $mail\r\n"; // Usar la variable $mail para el remitente

    if (mail($para, $asunto, utf8_decode($mensaje), $headers)) {
        header('Location: alerta.html');
    } else {
        echo "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
    }
} else {
    echo "Ha ocurrido un error al procesar el formulario.";
}
?>
