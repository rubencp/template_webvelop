<?php
 if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = $_POST['FNAME'];
  $email = $_POST['EMAIL'];
  $message = $_POST['message'];



  $from = 'Ofertas de Buceo';
  $to   = 'diana.garcia@buceo.xyz';
  $subject = 'Registro en la Pagina de Buceo';

  $body = "Name: $name , $vorname\n";
  $body = $body . "E-mail: $email\n";
  $body = $body . "Message: $message\n";

  if (!$name) {
      $errName = 'Porfavor escriba su nombre';
      echo "no name";
  }

  if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $errEmail = 'Porfavor escriba su direccion de correo';
      echo "no email";
  }

  if (!$errName && !$errEmail) {
    if (mail ($to, $subject, $body, $from)) {
        $result='<div class="alert alert-success">Gracias por su informacion, estaremos en contacto</div>';
    } else {
        $result='<div class="alert alert-danger">Lo sentimos, ha ocurrido un error, intentelo mas tarde</div>';
    }


    /* Email zu Kunde */
    $email_body_client = file_get_contents('email.txt');
    $email_body_client = str_replace('Estimado {name}', 'Estimado '.$name, $email_body_client);
    $subject_client = 'Oferta de Buceo Marsa-Alam';

    // To send HTML mail, the Content-type header must be set
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // Additional headers
    $headers .= 'From: Ofertas de Buceo<info@buceo.xyz>' . "\r\n";

    if (mail ($email, $subject_client, $email_body_client, $headers)) {   

    } else {

    }

  }  else  {
    // if error
  }

 }  // "no-post";

?>