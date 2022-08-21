<?php

extract($_REQUEST);
$file=fopen("emailBase.txt", "a");

//submite email
fwrite($file, "email :");
fwrite($file, $email . "\n");
echo('Thank you');
fclose($file);

?>