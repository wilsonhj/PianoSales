<?php

// header('Content-Type: application/json');

// if (empty($_GET['id'])) {
//   readfile('dummy-products-list.json');
// } else {
//   readfile('dummy-product-details.json');
// }
try{
  doStuff();
  require_once(__DIR__.'/functions.php');
  set_exception_handler("error_handler");
  $output = file_get_contents('./dummy-products-list.json');
  print $output;
}
catch(Exception $e) {
  echo 'Caught exception: ', $e->getMessage(), "\n";
  header("HTTP/1.1 500 Internal Server Error", true, 500);
}
  

?>