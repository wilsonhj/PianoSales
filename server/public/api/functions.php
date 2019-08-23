<?php
function error_handler($error){
  header("HTTP/1.1 500 Internal Server Error", true, 500);
  $output = array(
    "success" => false,
    "error" => $error->getMessage()
  );
  $json_output = json_encode($output);
  print $json_output;
  die();
}
function startup(){
  header('Content-type: application/json');
}
?>