<?php
require_once('./functions.php');

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
$query = "SELECT id, name, price, image, shortDescription, longDescription,
          GROUP_CONCAT(image_url) AS imgs
          FROM `products` AS p
          JOIN `images` AS i 
          ON `i`.`product_id` = p.id
          {$whereClause}
          GROUP BY i.product_id";

$result = mysqli_query($conn, $query);
if(mysqli_errno($conn)){
  throw new Exception(mysqli_error($conn));
}
if(mysqli_num_rows($result) === 0 && !empty($_GET['id'])){
  throw new Exception('Invalid id: ' . $_GET['id']);
}
$output = [];

if(empty($_GET['id'])){
  while($row = mysqli_fetch_assoc($result)) {
    $row['imgs'] = explode($delimiter=",", $string=$row['imgs']);
    $output[] = $row; 
  }
}else{
  $row = mysqli_fetch_assoc($result);
  $row['imgs'] = explode($delimiter=",", $string=$row['imgs']);
  $output = $row;
}

$json_output = json_encode($output);
print $json_output;
?>