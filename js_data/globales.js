/*
 *Aqui se declaran las variables que van a ser tomadas como variables globales 
 */
 //_dev: si esta en true tomara el valor de la variable de test
//variable que almacena el usuario

var globales={
	_URL:"https://contactayapp.mohansoft.com/",
	_usuario:false,
	_cerrar_sesion:true,
	_recordarme:false,
	_email_contacto:"contacto@bridgeclubdeidiomas.com.co",
	_email_contacto_test:"contacto@mohansoft.com",
	_token:"1234A678",
	_web_origen:"/bridge",
	_dev:false
};

if(globales._dev){
	globales._email_contacto=globales._email_contacto_test;
}
