<?php
	
	include 'Conexion.php';

	$datosFormLand = json_decode($_POST["json"]);
	//var_dump($datosFormLand);
	if($datosFormLand!=false){
		$conexion = new Conexion();
		$cnn = $conexion->getConexion();
		$sql = "INSERT INTO formulariolanding(idiomas, estrato, porque, codigo) VALUES (?,?,?,?);";
		$statement = $cnn->prepare($sql);
		$respuesta = false;
		foreach ($datosFormLand->{"data"} as $datosFormLand) {
		 	$statement->bindParam(1, $datosFormLand->{"idiomas"}, PDO::PARAM_STR);
		 	$statement->bindParam(2, $datosFormLand->{"estrato"}, PDO::PARAM_STR);
		 	$statement->bindParam(3, $datosFormLand->{"porque"}, PDO::PARAM_STR);
		 	$statement->bindParam(4, $datosFormLand->{"codigo"}, PDO::PARAM_STR);
		 	$respuesta = $statement->execute();
		 } 
		 echo json_encode(array("respuesta"=>"Gracias por contactarte, pronto uno de nuestros asesores se comunicará contigo!"));
	}else{
		echo json_encode(array("respuesta"=>"Debes ingresar todos los datos"));
	}
	
	 //echo $respuesta;
	