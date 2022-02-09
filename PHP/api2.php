<?php
header('Access-Control-Allow-Origin: *');

$string = $_GET["original_string"];
$palindrome = FALSE;
$reverse_string = strrev($string);
if ($reverse_string == $string){
    $palindrome = TRUE;
}else{
    $palindrome = FALSE;
}

$array = ["original_string" => $string,
          "reverse_string" => $reverse_string,
          "palindrome" => $palindrome];

echo json_encode($array);
?>