
$(document).ready(function() {	
	var foot;  //se almacena las etiquetas '#f1 path'
	var delay; //va almacenando el tiempo de espera 


$('#f1 ').css('opacity','1'); 
$('#brillo1,#f1').click(function(){ 
	setTimeout(function(){ $('#f2 ').css('opacity','1')}, 500);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 500);
	setTimeout(function(){ $('#f3 ').css('opacity','1')}, 1000);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 1000);
	setTimeout(function(){ $('#f4 ').css('opacity','1')}, 1300);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 1300);
	setTimeout(function(){ $('#f5 ').css('opacity','1')}, 1600);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 1600);
	setTimeout(function(){ $('#f6 ').css('opacity','1')}, 1900);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 1900);
	setTimeout(function(){ $('#f7 ').css('opacity','1')}, 2100);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 2100);
	setTimeout(function(){ $('#f8 ').css('opacity','1')}, 2400);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 2400);
	setTimeout(function(){ $('#f9 ').css('opacity','1')}, 2700);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 2700);
	setTimeout(function(){ $('#f10 ').css('opacity','1')}, 3000);
	setTimeout(function(){ $('#m2 ').trigger('openModal')}, 3200);


});

$('#brillo2,#f10').click(function(){ 
	setTimeout(function(){ $('#f11 ').css('opacity','1')}, 500);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 500);
	setTimeout(function(){ $('#f12 ').css('opacity','1')}, 1000);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 1000);
	setTimeout(function(){ $('#f13 ').css('opacity','1')}, 1300);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 1300);
	setTimeout(function(){ $('#f14 ').css('opacity','1')}, 1600);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 1600);
	setTimeout(function(){ $('#f15 ').css('opacity','1')}, 1900);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 1900);
	setTimeout(function(){ $('#f16 ').css('opacity','1')}, 2200);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 2200);
	setTimeout(function(){ $('#f17 ').css('opacity','1')}, 2500);	
	setTimeout(function(){ $('#m3 ').trigger('openModal')}, 2700);	
});

$('#brillo3,#f17').click(function(){ 
	setTimeout(function(){ $('#f18 ').css('opacity','1')}, 500);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 500);
	setTimeout(function(){ $('#f19 ').css('opacity','1')}, 1000);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 1000);
	setTimeout(function(){ $('#f20 ').css('opacity','1')}, 1300);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 1300);
	setTimeout(function(){ $('#f21 ').css('opacity','1')}, 1600);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 1600);
	setTimeout(function(){ $('#f22 ').css('opacity','1')}, 1900);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 1900);
	setTimeout(function(){ $('#f23 ').css('opacity','1')}, 2200);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 2200);
	setTimeout(function(){ $('#f24 ').css('opacity','1')}, 2500);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 2500);
	setTimeout(function(){ $('#f25 ').css('opacity','1')}, 2800);
	setTimeout(function(){ ion.sound.play("audiosteps")}, 2800);
	setTimeout(function(){ $('#f26 ').css('opacity','1')}, 3100);
	setTimeout(function(){ $('#m4 ').trigger('openModal')}, 3200);
});


$('#brillo4, #f26').click(function(){ 

	setTimeout(function(){ $('#f27 ').css('opacity','1')}, 500);
	setTimeout(function(){ $('#f28 ').css('opacity','1')}, 1000);
	setTimeout(function(){ $('#f29 ').css('opacity','1')}, 1300);
	setTimeout(function(){ $('#f30 ').css('opacity','1')}, 1600);
	setTimeout(function(){ $('#f31 ').css('opacity','1')}, 1900);
	setTimeout(function(){ $('#f32 ').css('opacity','1')}, 2200);
	setTimeout(function(){ $('#f33 ').css('opacity','1')}, 2500);
	setTimeout(function(){ $('#f34 ').css('opacity','1')}, 2800);
		setTimeout(function(){ $('#m5 ').trigger('openModal')}, 3000);

});



$('svg>path').hover(function(){
	ion.sound.play("audiopop");
});


   ion.sound({ 
   	sounds: [{ name: "audiopop",preload:false,volume:0.1 },{name:'audiosteps',volume:.05}    ],
    volume: 0.5,
    path: "ion.sound-3.0.0/sounds/",
    
});

// for(i=27,j=300;i<35;j=j+300,i++){
// 	delay=j;
// 	foot='"#f'+i+' "';
// 	console.log('%s',foot);
// 	setTimeout(function(){ $(foot).css('opacity','1')}, delay);
// 	console.log('%s',delay);

// }


});


