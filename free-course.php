<?php

		  $to = 'vox16@hotmail.fr';

		  $name = stripslashes($_POST['name']);
		  $mail = filter_var($_POST['mail'], FILTER_SANITIZE_EMAIL);

		  $subject  = "Life Coach Montreal - Free Email Course";

		  $msg  = "From : $name \r\n";
		  $msg .= "E-mail : $mail \r\n";

		  $msg .= "---Mail:--- \r\n\n".$mail."\r\n\n";

		  $msg .= "---Contact information--- \r\n\n";
		  $msg .= "IP : ".$_SERVER["REMOTE_ADDR"]."\r\n";
		  $msg .= "Browser : ".$_SERVER["HTTP_USER_AGENT"]."\r\n";

          if(mail($to, $subject, $msg, "From: $mail\r\nReply-To: $mail\r\nReturn-Path: $mail\r\n")){
		     echo "Thank you, you will receive the free e-mail course soon !";
		     mail($to, $subject, $msg, "From: $mail\r\nReply-To: $mail\r\nReturn-Path: $mail\r\n");
		  }
		  else{
		    echo "Request failed, Please try again.";
		  }

?>
