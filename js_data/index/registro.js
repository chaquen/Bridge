function iniciar_registro(){
	agregarEvento("btnContactarPQR","click",function(){
			var datos = $("#formPQR").serializarFormulario();
			datos.origen=globales._email_contacto;
			datos.token_email=globales._token;
			datos.web_origin=globales._web_origen;
			datos.asunto="Contacto PQR";
			if(datos.nivel=="--Selecciona tu nivel--"){
				mostrarMensaje("Debes seleccionar un nivel");
				return false;
			}		

			if(datos.modalidad=="--Selecciona tu Modalidad--"){
				mostrarMensaje("Debes seleccionar un nivel");
				return false;
			}		

			if(datos.pqr=="--Selecciona un Opción--"){
				mostrarMensaje("Debes seleccionar un nivel");
				return false;
			}		

			console.log(datos);
			if(false!=datos){
				registrarDato("contactar_pqr_bridge",datos,function(rs){
					mostrarMensaje(rs);
				},"formPQR");
			}else{
				mostrarMensaje("Por favor ingresa los campos requeridos");
			}
	});

	agregarEvento("btnContactar","click",function(){
			var datos = $("#formContacto").serializarFormulario();
			datos.origen=globales._email_contacto;
			console.log(datos);
			if(false!=datos){
				
					datos.token_email=globales._token;
					datos.web_origin=globales._web_origen;
					datos.asunto="Contacto web";
				registrarDato("contactar_general",datos,function(rs){
					mostrarMensaje(rs);
				},"formContacto");
			}else{
				mostrarMensaje("Por favor ingresa los campos requeridos");
			}
	});
}
agregarEventoLoad(iniciar_registro);