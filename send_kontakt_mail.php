<?php
 if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $vorname = $_POST['vorname'];
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];




  $from = 'Lars Erichsen Webseite';
  $to   = 'dianacgarciap@gmail.com';
  $subject = 'Anmeldung an Lars Erichsen Webseite';

  $body = "Name: $name , $vorname\n";
  $body = $body . "E-mail: $email\n";
  $body = $body . "Message: $message\n";

  if (!$_POST['name']) {
      $errName = 'Bitte schreiben Sie Ihre Name';
      echo "no name";
  }

  if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
      $errEmail = 'Bitte schreiben eine E-mail Adresse';
      echo "no email";
  }

  if (!$errName && !$errEmail) {
    //echo "attempt sending email";
    if (mail ($to, $subject, $body, $from)) {
        $result='<div class="alert alert-success">Viele Dank für Ihre Nachrricht! I will be in touch</div>';
    } else {
        $result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
    }




    /* Email zu Kunde */
    $email_body_client = file_get_contents('email.txt');
    $email_body_client = str_replace('Lieber {name}', 'Lieber '.$name, $email_body_client);
    $subject_client = 'Noch 1 Klick zu Deinem Gratis-Report';

    // To send HTML mail, the Content-type header must be set
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // Additional headers
    $headers .= 'From: Lars-Erichsen Webseite Anmeldung<info@lars-erichsen.de>' . "\r\n";

    if (mail ($email, $subject_client, $email_body_client, $headers)) {   

    } else {

    }

  }  else  {
    //echo "email not sent";
  }

 } else {
  //echo "no-post";
 }

?>