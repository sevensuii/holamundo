<?php
// header('Access-Control-Allow-Origin: *');
header('Access-Controll-Allow-Methods: GET, POST, OPTIONS');
header("Content-Type: application/json; charset=UTF-8");
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

$dni = $_GET["dni"];
$query = "select * from usuarios where dni like $dni";



$resultado =  mysqli_query($conn,$query) or die( mysqli_error($conn));
// $return_arr = mysqli_fetch_array($resultado);
// $r_encoded = json_encode($return_arr);
// echo $r_encoded;

$myObj = new stdClass;
// $myObj;

        while ($rows = mysqli_fetch_assoc($resultado)) { 
            
            $name = $rows["name"];
            $surname = $rows["surname"];
            $dni = $rows["dni"];
            $date = $rows["date"];
            $pcode = $rows["pcode"];
            $email = $rows["email"];
            $hphone = $rows["hphone"];
            $number = $rows["number"];
            $iban = $rows["iban"];
            $ccard = $rows["ccard"];
            $password = $rows["password"];

        // //     $return_arr[] = array("name" => $name,
        // //             "surname" => $surname,
        // //             "dni" => $dni,
        // //             "date" => $date,
        // //             "pcode" => $pcode,
        // //             "email" => $email,
        // //             "hphone" => $hphone,
        // //             "number" => $number,
        // //             "iban" => $iban,
        // //             "ccard" => $ccard,
        // //             "password" => $password);


            // $myObj['name'] = $rows["name"];
            // $myObj['surname'] = $rows["surname"];
            // $myObj['dni'] = $rows["dni"];
            // $myObj->date = $rows["date"];
            // $myObj->pcode = $rows["pcode"];
            // $myObj->email = $rows["email"];
            // $myObj->hphone = $rows["hphone"];
            // $myObj->number = $rows["number"];
            // $myObj->ccard = $rows["iban"];
            // $myObj->iban = $rows["ccard"];
            // $myObj->password = $rows["password"];



             
        // var_dump $resultado;
        // echo $r_encoded;
        $myObj->name = $name;
        $myObj->surname = $surname;
        $myObj->dni = $dni;
        $myObj->date = $date;
        $myObj->pcode = $pcode;
        $myObj->email = $email;
        $myObj->hphone = $hphone;
        $myObj->number = $number;
        $myObj->ccard = $ccard;
        $myObj->iban = $iban;
        $myObj->password = $password;
        $myJSON = json_encode($myObj);
        echo $myJSON;
        }

?>

<!-- include "config.php";

$return_arr = array();

$query = "SELECT * FROM users ORDER BY NAME";

$result = mysqli_query($con,$query);

while($row = mysqli_fetch_array($result)){
    $id = $row['id'];
    $username = $row['username'];
    $name = $row['name'];
    $email = $row['email'];

    $return_arr[] = array("id" => $id,
                    "username" => $username,
                    "name" => $name,
                    "email" => $email);
} -->
