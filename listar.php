<?php 
include 'Conexion.php';

$conexion = new Conexion();
$cnn = $conexion->getConexion();
$sql = "SELECT * FROM formulariolanding";
$statement = $cnn->prepare($sql);
$valor = $statement->execute();

if($valor){
	while($resultado = $statement->fetch(PDO::FETCH_ASSOC)){
		$data["data"][] = $resultado;
	}
	echo json_encode($data);
}else {
	echo "la cago";
}

$statement->closeCursor();
$conexion = null;