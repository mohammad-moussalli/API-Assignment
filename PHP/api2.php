<?php

$string = $_GET["string"];
$palindrome = FALSE;
$reverse_string = strrev($string);
if ($reverse_string == $string){
    $palindrome = TRUE;
}

$array = ["original_string" => $string,
          "reverse_string" => $reverse_string,
          "palindrome" => $palindrome];

echo json_encode($array);

?>