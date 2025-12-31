<?php
include_once("../db_config.php");

$rowdata = $db->query("SELECT * FROM test");

$output = [];
while($row = $rowdata->fetch_object()){
    $output[] =$row;
}
echo json_encode($output);


?>