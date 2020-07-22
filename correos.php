<?php
    $destinatario = 'valdazoamerico@gmail.com';

    $nombre = $_POST['nombre'];
    $asunto = $_POST['tel'];
    $mensaje = $_POST['mensaje'];
    $email = $_POST['email'];

    $header = "Enviado desde la pagina de Rescataditos.";
    $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

    mail($destinatario, $asunto, $mensajeCompleto, $header);
    echo "<script>alert('Correo enviado exitosamente')</script>";
    echo "<script> setTimeout(\"location.href='index.html'\", 1000)</script>";

    ?>