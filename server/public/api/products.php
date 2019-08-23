<?php
require_once(__DIR__.'/functions.php');
require_once('./db_connection.php');
set_exception_handler("error_handler");
startup();

$query = 'SELECT * FROM `products` WHERE `price` > 2000';
$result = mysqli_query( $conn, $query);
if(!$result){
  throw new Exception(mysqli_error($conn));
}

$output = [
  "success" => false,
  "data" => []
];
if(mysqli_num_rows($result) == 0){
  print "no data available";
}

$output["success"] = true;

while($row = mysqli_fetch_assoc($result)) {
  $output["data"][] = $row; 
}
$json_output = json_encode($output);
print $json_output;

?>