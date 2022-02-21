<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "tienda";

    $categoria = $_REQUEST['categoria'] ?? '';

    try {
        $conn = new mysqli($servername, $username, $password, $dbname);
    //   $conn = new mysqli("mysql:host=$servername;dbname=tienda", $username, $password);
      // set the PDO error mode to exception
    //   $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //   echo "Connected successfully";
    } catch(PDOException $e) {
      echo "Connection failed: " . $e->getMessage();
    }

    $sql = "SELECT producto_id,nombre,cant_disp,precio,descripcion,categoria,imagen FROM productos WHERE categoria = $categoria;";
    $resultado = mysqli_query($conn, $sql) or die(mysqli_error($conn));

    $myObj = new stdClass;

    $return_arr = array();

    while ($file = mysqli_fetch_assoc($resultado)) {
        $nombre = $file['nombre'];
        $cantidad = $file['cant_disp'];
        $precio = $file['precio'];
        $descripcion = $file['descripcion'];
        $categoria = $file['categoria'];
        $imagen = $file['imagen'];

        $item = array("id" => $file['producto_id'], "nombre" => $nombre, "cantidad" => $cantidad, "precio" => $precio, "descripcion" => $descripcion, "categoria" => $categoria, "imagen" => $imagen);

        array_push($return_arr, $item);
    }

    // var_dump($return_arr);
    $isJSON = json_encode($return_arr);
    echo $isJSON;



?>