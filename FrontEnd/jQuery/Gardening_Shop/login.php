<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "tienda";
    
    $usuario = $_REQUEST['usuario'] ?? '';
    $contra = $_REQUEST['pass'] ?? '';

    try {
        $conn = new mysqli($servername, $username, $password, $dbname);
    //   $conn = new mysqli("mysql:host=$servername;dbname=tienda", $username, $password);
      // set the PDO error mode to exception
    //   $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //   echo "Connected successfully";
    } catch(PDOException $e) {
      echo "Connection failed: " . $e->getMessage();
    }

    $sql = "SELECT usuario,pass FROM clientes WHERE usuario LIKE $usuario;";
    $resultado = mysqli_query($conn, $sql) or die(mysqli_error($conn));
    
    
    // $return_arr = array();
    
    while ($file = mysqli_fetch_assoc($resultado)) {
        $usu1 = $file['usuario'] ?? false;
        $contra1 = $file['pass'];
        // echo $usu1;
        if (($usuario <=> $usu1) && ($contra <=> $contra1)) {
            echo 'true';
        }
    }
    
    // // var_dump($return_arr);


    // $isJSON = json_encode($return_arr);
    // echo $isJSON;





?>