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

$persona = json_decode(stripslashes(file_get_contents('php://input')));

$sql = "INSERT INTO usuarios (name, surname, dni, date, pcode, email, hphone, number, iban, ccard, password) VALUES('" . $persona->name ."','" . $persona->surname ."','".$persona->dni ."','".$persona->date ."','".$persona->pcode ."','".$persona->email ."','".$persona->hphone ."','".$persona->number ."','".$persona->iban ."','".$persona->ccard ."','".$persona->password ."')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?> 