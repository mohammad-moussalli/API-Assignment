<?php
header('Access-Control-Allow-Origin: *');

$password = $_GET["password"];
$hashed_password = hash('sha256', $password);
$valid_password = FALSE;

if (preg_match('/[A-Za-z]/', $password) && preg_match('/[0-9]/', $password) && strlen($password) > 8){
    $valid_password = TRUE;
}

$array =["password" => $hashed_password,
         "password_validity" => $valid_password];

echo json_encode($array);

?>

