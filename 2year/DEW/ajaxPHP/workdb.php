<?php
  
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO usuarios (name, surname, dni, date, pcode, email, hphone, number, iban, ccard, password) VALUES('" . $_REQUEST['name'] ."','" . $_POST['surname'] ."','".$_GET['dni'] ."','".$_POST['date'] ."','".$_POST['pcode'] ."','".$_POST['email'] ."','".$_POST['hphone'] ."','".$_POST['number'] ."','".$_POST['iban'] ."','".$_POST['ccard'] ."','".$_POST['password'] ."')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?> 