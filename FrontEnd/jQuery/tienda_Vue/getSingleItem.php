<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "tienda";
    
    $id = $_REQUEST['id'] ?? '';

    try {
        $conn = new mysqli($servername, $username, $password, $dbname);
    //   $conn = new mysqli("mysql:host=$servername;dbname=tienda", $username, $password);
      // set the PDO error mode to exception
    //   $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //   echo "Connected successfully";
    } catch(PDOException $e) {
      echo "Connection failed: " . $e->getMessage();
    }

    $sql = "SELECT producto_id,nombre,cant_disp,precio,descripcion,categoria,imagen FROM productos WHERE producto_id = $id;";
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

        $return_arr = array("id" => $file['producto_id'], "nombre" => $nombre, "cantidad" => $cantidad, "precio" => $precio, "descripcion" => $descripcion, "categoria" => $categoria, "imagen" => $imagen);
    }

    // var_dump($return_arr);
    $isJSON = json_encode($return_arr);
    echo $isJSON;





?>