<?php 
	class Conexion{
		private $host = "localhost";
		private $dbname = "mohansof_landingcorreo_bci";
		private $user = "mohansof_bci_us";
		private $password = "sNGGzF@gI)Iw";
		private $conexion = null;

		public function getConexion(){
			try{
				$this->conexion = new PDO(
					"mysql:host=$this->host; dbname=$this->dbname",
					$this->user,
					$this->password
				);
				return $this->conexion;
			}catch(Exception $e){
				echo $e->getMessage();
			}finally{
				$this->conexion = null;
			}
		}
	}