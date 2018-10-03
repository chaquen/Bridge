
window.onload = function() {
	console.log(window.location);
 var device = navigator.userAgent;	
 console.log(device);
 console.log(typeof(device) );
 console.log(device.indexOf("iPhone"));
 console.log(device.match(/iPhone/));
 var r=device.match(/Windows/);
 //console.log(r[0]);
 if(r!=null){
	if(r[0]!="Windows"){
		window.location = "landingMovil.html";
	}

 }else{
 	window.location = "landingMovil.html";
 }
				
}