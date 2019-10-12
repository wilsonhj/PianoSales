<?php
function error_handler($error) {
  header("HTTP/1.1 500 Internal Server Error", true, 500);
  $output = array(
    "success" => false, // assoc arr
    "error" => $error // method of $error obj
  );
  $json_output = json_encode($output);
  print $json_output;
  die();
}
set_exception_handler('error_handler');

function startup(){
  header('Content-type:application/json');
}
if(!function_exists('getBodyData')){
  function getBodyData(){
    $entityBody = file_get_contents('php://input');
    $assocArr = json_decode($entityBody, true);
    return $assocArr;
  }
}

?>