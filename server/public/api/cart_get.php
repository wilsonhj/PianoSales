<?php

if (!INTERNAL){
  exit("Prohibit direct access");
}

if(empty($_SESSION['cart_id'])){
  print(json_encode([]));
  exit();
}else {
  $cartId = intval($_SESSION['cart_id']);
}

$query = "SELECT cartItems.price AS price,
          cartItems.count AS `count`,
          products.Name AS name,
          products.image AS image,
          products.id AS `id`,
          products.shortDescription AS `shortDescription`
          FROM cartItems 
          INNER JOIN products ON cartItems.productID = products.id
          WHERE cartItems.cartId = $cartId";

$result = mysqli_query($conn, $query);
if(empty($result)){
  throw new Exception(mysqli_connect_error());
}
$output = [];
while($row = mysqli_fetch_assoc($result)){
  $output[] = $row;
}

print(json_encode($output));
?>