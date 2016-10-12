// tu codigo va aca
function Promedio(a,b,c,callback){
	var resultado = (a+b+c)/3;
	return callback(resultado);
}

/*fin ejercicio uno*/
var cont=1
function segundero(){
	 document.getElementById("titulo").innerHTML = cont;

	cont++; 
}
setInterval (segundero,1000);