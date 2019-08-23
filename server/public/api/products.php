<?php
require_once(__DIR__.'/functions.php');
set_exception_handler("error_handler");
require_once('./db_connection.php');

startup();

$query = 'SELECT * FROM `products`';
$result = mysqli_query( $conn, $query);
if(!$result){
  throw new Exception(mysqli_error($conn));
}

$output = [
  "success" => false,
  "data" => []
];
if(mysqli_num_rows($result) === 0){
  print $result;
}

$output["success"] = true;

while($row = mysqli_fetch_assoc($result)) {
  $output["data"][] = $row; 
}
$json_output = json_encode($output);
print $json_output;

?>