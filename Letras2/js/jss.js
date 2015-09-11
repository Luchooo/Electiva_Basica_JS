$(function()
{


	
	var puntaje=1000;
	
	var inicia = false;


	// body...
	$("#start").click(function(event)
	{
		$(this).fadeOut('fast', function() {
			

			setInterval(letraMuestra,$vel);
			inicia = true;
		});
	});



	//Para generar letras aleatorias...
	var letraMuestra = function()
	{
		//Se debe obtener una letra aleatoria del alfabeto y ubicarla en una posición aleatoria...
		
		var animacion_entrada =['animated wobble','animated tada','animated shake','animated rubberBand', 'animated pulse', 'animated flash', 'animated bounce'];

		var numLetra = Math.floor(Math.random() * 26) + 97; // Me muestra el numero de la letra en ASCII
		var posLetra = {
							left : Math.floor(Math.random() * (screen.width - 100)), 
							top  : Math.floor(Math.random() * (screen.height - 150))
						};
		var letraPone = String.fromCharCode(numLetra).toUpperCase(); //Me muestra la letra como tal 
		var divLetra = "<div class = 'circulo letra_"+(letraPone)+" '" + 
							"style = \"left : "+(posLetra.left)+"px; top : "+(posLetra.top) + 
							"px; background-color: " + randomColor()+"\">" + 
							(String.fromCharCode(numLetra).toUpperCase()) + 
						"</div>";
		$("body").append(divLetra);
		//flash, wobble
		
		$(".letra_" + letraPone).addClass(animacion_entrada[Math.floor(Math.random()*7)]);
	

	};

	









	//Para detectar eventos de teclado...
	







	$(document).keypress(function(event)
	{
		//console.log(event.keyCode); numero de la letra en ASCII
		
		
		if(event.keyCode >= 97 && event.keyCode <= 122 && inicia)
		{
			var animacion_salida =['animated hinge', 'animated bounceOut','animated flipOutX','animated rotateOut','animated zoomOut','animated zoomOutUp'];
			var letraPresiona = String.fromCharCode(event.keyCode).toUpperCase();
			//Número de ocrrencias de la letra...
			var numVeces = $(".letra_" + letraPresiona).size();
			$(".letra_" + letraPresiona).addClass(animacion_salida[Math.floor(Math.random()*7)]).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function()
			{
  				$(this).remove();
			});
		}



if(numVeces==0){
 console.log ('Perdio la letra '+ letraPresiona +' No se encontraba !!CONCENTRESE!!'); 
 location.reload();// Recarga pantalla Again 

}






var a=  $(".letra_" + letraPresiona).size();

puntaje=puntaje+a;


$("#score").html("<span> SCORE: </span> "+puntaje);



});


	//	console.log('numVeces'+numVeces+ 'letra prsionada' +letraPresiona);			



//var a = score=$(".letra_" + letraPresiona).size()+score;






	var randomColor = function()
	{
    	// from http://www.paulirish.com/2009/random-hex-color-code-snippets/
    	return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
    	(c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
  	};
});



// Animacion de Entrada Random 
// Animacion de Salida Random 
// Score
// Valida que opriman una letra que no es.

