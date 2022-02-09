<?php

$x = $_GET["x"];
$y = $_GET["y"];

$value ="2 * ".$x." + ".$y." % 2";
$array = ["value" => $value];

echo json_encode($array);

?>