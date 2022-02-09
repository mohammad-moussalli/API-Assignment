<?php
header('Access-Control-Allow-Origin: *');

$str = $_GET["str"];
$clean_str = trim(preg_replace('/\s+/',' ',  $str ));

$array = ["original_str" => $str,
          "clean_str" => $clean_str];

echo json_encode($array);

?>