$(document).ready(function() {	

 $('#img-mv').magnify();



var arr=["fogón","gonfoterio","lanza" , "papas"];
var puntaje=0;	
	

	$.ftnEnc=function (){
		
		var encontrado=false;
		var ingresado= document.getElementById("ingresado").value;
		for(var i=0;encontrado==false && i<arr.length;i++){	
        if(ingresado===arr[i]){
			puntaje++;
			$('#ptj').find('p').html('Encontraste! '+ingresado+' Puntaje: '+puntaje);		
			delete arr[i];
			encontrado= true;
			$('#ingresado').html('value=" "');
        }

        else{
			$('#ptj').find('p').html('No esta!'+' Puntaje: '+puntaje);
	   		 encontrado= false;		
		}
		}

}

});