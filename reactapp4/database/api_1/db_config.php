<?php
$host = "Localhost";
$db = "reactphp";
$user = "root";
$pass = "";
$db =new mysqli($host, $user, $pass, $db);
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: *");

?>