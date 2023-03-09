<?php
$name = $_POST["name"];
$senderAddress = $_POST["emailAddress"];
$message = $_POST["message"];
echo "<p>Thank you for sending me a message, ".$name."! I will be in touch shortly.</p>
<p>Your message:</p>".$message;
$subj = "Message from ".$name;
mail("margaretbguzman@gmail.com", $subj, $message, "From: root@margaretbguzman.com");
?>