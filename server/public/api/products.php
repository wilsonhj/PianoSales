<?php
require_once('./functions.php');
set_exception_handler("error_handler");
require_once('./db_connection.php');

startup();

if(empty($_GET['id'])){
  $whereClause = '';
}elseif(!is_numeric($_GET['id'])){
  throw new Exception("id needs to be a number");
}else{
  $id = $_GET['id'];
  $whereClause = "WHERE `id` = {$id}";
}
$query = "SELECT id, name, price, image, shortDescription,
GROUP_CONCAT(image_url) AS imgs
FROM `products` AS p
  JOIN `images` AS i 
    ON `i`.`product_id` = p.id
  GROUP BY i.product_id";
// $query = "SELECT * FROM `products` {$whereClause}";
$result = mysqli_query($conn, $query);
if(!$result){
  throw new Exception(mysqli_error($conn));
}
if(mysqli_num_rows($result) === 0 && !empty($_GET['id'])){
  throw new Exception('Invalid id: ' . $_GET['id']);
}
$output = [];

while($row = mysqli_fetch_assoc($result)) {
  $row['imgs'] = explode($delimiter=",", $string=$row['imgs']);
  $output[] = $row; 
}
$json_output = json_encode($output);
print $json_output;
?>