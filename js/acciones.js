// JavaScript Document

$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		
		$('#izquierda').on("swipeleft",function(){
			navigator.notification. alert("deslizo a la izquierda",function(){"Aplicacion7","Aceptar"});
			});//cierre de la izquierda
			
		$('#derecha').on("swiperight",function(){
			navigator.notification. confirm("¿Que quieres hacer?",function(opt){
				switch(opt)
				{
					case 1:
					navigator.notification.beep(1);
					break;
					
					case 2:
					navigator.notification.vibrate(1000);
					break;
				}
			},"Aplicaion7","Beep,Vibrar,Cancelar");
			
		});//cierre del vibrate
	},false);//cierra el deviceready
});//cierra document ready