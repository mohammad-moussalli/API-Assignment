<?php
header('Access-Control-Allow-Origin: *');
$x = $_GET["x"];
$y = $_GET["y"];

$value ="2 * ".$x." + ".$y." % 2";
$array = ["x" => $x ,
          "y" => $y ,
          "value" => $value];

echo json_encode($array);

?>