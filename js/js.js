// var usuario = prompt("¿Cual es tu peso?");
// var planeta = prompt("Elije tu planta \n 1 es marte y 2 es Jupiter");
// var peso = parseInt(usuario);
// var g_tierra = 9.8;
// var g_marte = 3.7;
// var g_jupiter = 24.8;
// var peso_final;
// var nombre;

// if (planeta == 1) {
// 	peso_final = (peso * g_marte) / g_tierra;
// 	nombre = "Marte";
// } else if (planeta == 2) {
// 	peso_final = (peso * g_jupiter) / g_tierra;
// 	nombre = "Jupiter";
// } else {
// 	peso_final = 10000000000000000000;
// 	nombre = "Krypton";
// }
// peso_final = parseInt(peso_final);
// document.write(
// 	"Tu peso en " + nombre + " es <strong>" + peso_final + "kilos</strong>"
// );

// var ruta = window.location;
// console.log(window);
// document.write("estas en :" + ruta);

var texto = document.getElementById("Texto_Linea");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoporclick);

var d = document.getElementById("dibujo");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}
function dibujoporclick() {
	var lineas = parseInt(texto.value);
	var l = 0;
	var yi, xf;
	var xi, yf;
	var espacio = ancho / lineas;

	while (l < lineas) {
		yi = espacio * l;
		xf = espacio * (l + 1);
		xi = 300 - yi;
		yf = 300 - xf;
		console.log("linea" + 1);
		dibujarLinea("black", 1, yi, xf, 299);
		dibujarLinea("Black", xi, 1, 299, yf);
		dibujarLinea("black", xi, 300, 300, yi);
		dibujarLinea("black", 1, xi, xf, 1);

		l = l + 1;
	}
	dibujarLinea("black", 1, 1, 1, 299);
	dibujarLinea("black", 1, 1, 299, 1);
	dibujarLinea("black", 299, 1, 299, 299);
	dibujarLinea("black", 299, 299, 1, 299);
	alert("funciono");
}
