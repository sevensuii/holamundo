<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.12/css/jquery.dataTables.css">
  
<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

<script type="text/javascript" charset="utf8" src="//cdn.datatables.net/1.10.12/js/jquery.dataTables.js"></script>

<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>


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
    $municiipio = $_GET["muni"]??"";

    echo "<form action='ejer2.php' method='GET'>";
    echo "<select id='Nmunicipio' name='Nmunicipio' selected='$municiipio'>";
    while ($registro = $resultado->fetch_object()) {
        echo "<option value=\"$registro->Municipio\">$registro->Municipio ($registro->Isla)<br>";
      
    }
    echo "</select>";
    echo "<input type='submit' value='Mostrar'>";
    echo "</form>";
    $sql="select Codigo, Denominación, Direccion, CodigoPostal, Longitud, Latitud from centros where like Municipio=\"$municiipio\"";
    $resultado = $mysql1->query($sql);
    echo "<table id='tabla' border=1><tr><td>Codigo</td><td>Denominacion</td><td>Direccion</td><td>Codigo Postal</td><td>Longitud</td><td>Latitud</td></tr>";
    while($registro = $resultado->fetch_object()) {
        echo "<tr><td>$registro->Codigo</td><td><td>$registro->Denominación</td><td><td>$registro->Direccion</td><td><td>$registro->CodigoPostal</td><td><td>$registro->Latitud</td><td><td>$registro->Longitud</td></tr>";
    }
?>

<script>
	$(document).ready(function(){
	    $("#Nmunicipio").select2();	
</script>
