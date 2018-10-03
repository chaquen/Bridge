<?php
	
	include 'Conexion.php';

	$datosFormLand = json_decode($_POST["json"]);

	$conexion = new Conexion();
	$cnn = $conexion->getConexion();
	$sql = "INSERT INTO formulariolanding(idiomas, estrato, porque, codigo) VALUES (?,?,?,?);";
	$statement = $cnn->prepare($sql);
	$respuesta = false;
	foreach ($datosFormLand->{"data"} as $datosFormLand) {
	 	$statement->bindParam(1, $datosFormLand->{"idiomas"}, PDO::PARAM_STR);
	 	$statement->bindParam(1, $datosFormLand->{"estrato"}, PDO::PARAM_INT);
	 	$statement->bindParam(1, $datosFormLand->{"porque"}, PDO::PARAM_STR);
	 	$statement->bindParam(1, $datosFormLand->{"codigo"}, PDO::PARAM_INT);
	 	$respuesta = $statement->execute();
	 } 

	 echo $respuesta;
	