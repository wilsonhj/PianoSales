<?php

if (!INTERNAL) {
  exit("INTERNAL defined. Prohibit direct access.");
}
$postData = getBodyData();  // getbodydata => assoc


if(!empty($postData['count'])){
  $count = $postData['count'];
}else{
  $count = 1;
}

$transaction = mysqli_query($conn, 'START TRANSACTION');
if(!$transaction) {
  throw new Exception('Could not start Transaction.');
}

if(empty($postData['id'])){
  throw new Exception('Id is empty.');
}
$id = intval($postData['id']);
if ($id <= 0) {
  throw new Exception('Invalid id');
}

if(empty($_SESSION['cart_id'])) {
  $cartID = false; 
} else {
  $cartID = $_SESSION['cart_id'];
}
if($cartID === false){
  
  $insertQuery = "INSERT INTO `cart` 
                  SET `created` = NOW()";
  $result = mysqli_query($conn, $insertQuery);
  if(!$result){
    throw new Exception('result of query incorrect.');
  }
  if(mysqli_affected_rows($conn)!== 1){
    throw new Exception("Affected rows not equal to 1.");
  } 
  $cartID = mysqli_insert_id($conn);

}

  // if(mysqli_num_rows($result)!==1){
  //   throw new Exception('could not find the data for id '.$id);
  // }

$_SESSION['cart_id'] = $cartID;

$priceQuery = "SELECT price 
              FROM products 
              WHERE id = $id";
$priceResult = mysqli_query($conn, $priceQuery);
if(!$priceResult){
  throw new Exception('price query failed' . mysqli_error($conn));
}
if(mysqli_num_rows($priceResult) < 1){
  throw new Exception('could not find the data for id ' . $id );
}
$productData = mysqli_fetch_assoc($priceResult);

$price = $productData['price'];

$insertDataQuery = "INSERT INTO `cartItems` (productID, `count`, price, added, cartID) 
                    VALUES ($id, $count, $price, NOW(), $cartID) 
                    ON DUPLICATE KEY UPDATE `count`=`count`+ {$count}";

$insertDataResult = mysqli_query($conn, $insertDataQuery);

// if(!$insertDataResult){
//   throw new Exception('could not check for id '.$id);
// }
if(mysqli_affected_rows($conn) < 1 ){
  $rollback = mysqli_query($conn, 'ROLLBACK');
  throw new Exception("Query did not update at least 1 row.");
}else {
  $commit = mysqli_query($conn, "COMMIT");
}
require('cart_get.php');
?>