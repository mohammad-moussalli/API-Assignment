<?php

$str = $_GET["str"];
$clean_str = trim($str);

$array = ["original_str" => $str,
          "clean_str" => $clean_str];

echo json_encode($array);

?>