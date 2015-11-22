
$(document).ready(function() {

//HOVER ARRIBA
$('#svg_34,#svg_7').hover(function(){
	$('#svg_2').css('fill','#1eac7d');
	$('#texto').html('monteverde');
	$('#texto').css('color','#1eac7d');
	$('#texto').css('visibility','visible');
	
});

//HOVER DERECHO
$('#svg_32,#svg_9').hover(function(){
	$('#svg_2').css('fill','#66398e');
	$('#texto').html('juegos');
	$('#texto').css('color','#66398e');
	$('#texto').css('visibility','visible');
});

//HOVER ABAJO
$('#svg_31,#svg_13').hover(function(){
	$('#svg_2').css('fill','#f07e07');
	$('#texto').html('extremófilos');
	$('#texto').css('color','#f07e07');
	$('#texto').css('visibility','visible');

});


$('#svg_11,#svg_33').mouseenter(function(){
	$('#svg_2').css('fill','#2592d1');
	$('#texto').html('inicio');
	$('#texto').css('color','#2592d1');
	$('#texto').css('visibility','visible');


});

$('#svg_11,#svg_33,#svg_34,#svg_7,#svg_32,#svg_9,#svg_31,#svg_13').mouseleave(function(){
	$('#texto').css('visibility','hidden');
	$('#svg_2').css('fill','rgb(132, 132, 132)');
	$('#svg_5').css('fill','rgb(255, 255, 255)');


	});


//HOVER IZQUIERDA
// $('#svg_11,#svg_33').hover(function(){
// 	$('#svg_2').css('fill','#2592d1');
// 	$('#texto').html('inicio')
// 	$('#texto').css('color','#2592d1');

// });

//fuera del hover



});
 