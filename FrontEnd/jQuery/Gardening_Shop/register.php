<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "tienda";
    
    $usuario = $_REQUEST['usuario'] ?? '';
    $nombre = $_REQUEST['nombre'] ?? '';
    $apellidos = $_REQUEST['apellidos'] ?? '';
    $correo = $_REQUEST['correo'] ?? '';
    $pass = $_REQUEST['password'] ?? '';

    try {
        $conn = new mysqli($servername, $username, $password, $dbname);
    //   $conn = new mysqli("mysql:host=$servername;dbname=tienda", $username, $password);
      // set the PDO error mode to exception
    //   $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //   echo "Connected successfully";
    } catch(PDOException $e) {
      echo "Connection failed: " . $e->getMessage();
    }

    $sql = "INSERT INTO clientes(usuario,nombre,apellidos,correo,pass) VALUES($usuario,$nombre,$apellidos,$correo,$pass)";
    $resultado = mysqli_query($conn, $sql) or die(mysqli_error($conn));

    // var_dump($return_arr);
    // $isJSON = json_encode($return_arr);
    // echo $isJSON;

    



?>