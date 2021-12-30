


<?php
    $server="cifpzonzamas.org";
    $user="institu3_neptuno";
    $password="neptuno";
    $db="institu3_neptuno";

    $mysql1 = new mysqli($server, $user, $password, $db);
    if ($mysqli->connect_errno) {
        echo "Fallo la conexion con MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }
    $mysql1->set_charset("utf8");

    $sql="select Distinct Municipio, Isla from centros";
    $resultado = $mysql1->query($sql);

    echo "<select id='Nmunicipio'>";
    while ($registro = $resultado->fetch_object()) {
        echo "<option value=\"$registro->Municipio\">$registro->Municipio ($registro->Isla)<br>";
      
    }
    echo "</select>";
    echo "<button>Mostrar</button>";

?>
