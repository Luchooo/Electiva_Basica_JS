window.onload = function()
{
palindromo();
};


function palindromo(){
capturar('palabra').focus();
capturar('form').addEventListener('submit', function(event)
{
var palabra = capturar("palabra").value;
var minuscula =palabra.toLowerCase();

for (var i = 0; i < minuscula.length; i++) {
	minuscula=minuscula.replace(" ","")
			};

if (minuscula.indexOf(' ')== -1) {

			var sin_espacios=minuscula;
			
			var inversa = sin_espacios.split("").reverse().join("");

			var comparacion = sin_espacios.localeCompare(inversa);

			if (comparacion==0) {
				alert('Es palindromo');
			}

			else{

				alert('NO es palindromo');
			}

};
});




















function capturar (div) {
	return document.getElementById(div)	
};

}	

