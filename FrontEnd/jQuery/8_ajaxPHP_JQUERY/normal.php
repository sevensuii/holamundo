


<?php
// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json; charset=UTF-8");


// if(isset($_POST["x"])){

//         $obj = json_decode($_POST["x"], false);
//         $myJSON = json_encode($obj);
//         echo ($myJSON);

//   } else {
//         $myObj = new stdClass;
//         $myObj->name = "Pepe";
//         $myObj->surname = "Lopez Perez";
//         $myObj->dni = "12345678X";
//         $myObj->date = "22/09/2000";
//         $myObj->cp = 35500;
//         $myObj->mail = "pepe@gmail.com";
//         $myObj->phone = "928666666";
//         $myObj->mobile = "666999666";
//         $myObj->card = "4539955085883327";
//         $myObj->iban = "ES7921000813610123456789";
//         $myObj->password = "Pepe123456789*";
//         $myJSON = json_encode($myObj);
//         echo $myJSON;

//   }
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


if(isset($_POST["data"])){

        $obj = json_decode($_POST["miForm"], false);
        $myJSON1 = json_encode($obj);
        echo ($myJSON1);
        echo "Your object was received";

  } else {
        $myObj = new stdClass;
        $myObj->name = "Pepe";
        $myObj->surname = "Lopez Perez";
        $myObj->dni = "12345678X";
        $myObj->date = "22/09/2000";
        $myObj->pcode = "35500";
        $myObj->email = "pepe@gmail.com";
        $myObj->hphone = "928666666";
        $myObj->number = "666999666";
        $myObj->ccard = "4539955085883327";
        $myObj->iban = "ES7921000813610123456789";
        $myObj->password = "Pepe123456789*";
        $myJSON = json_encode($myObj);
        echo $myJSON;
      // echo "aaaa";

  }
?>

