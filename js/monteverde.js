$(document).ready(function() {	


$('#sabiasqueMV').click(function(){
	$(this).fadeOut(1000,function(){
        $('#mapa').fadeIn(1000,function(){
        $('#mapa-inst').fadeIn(500);
        $('#m1').trigger('openModal');
		});
	});
});

$(function() {
    $('#m1').easyModal();
     $('#m2').easyModal();
      $('#m3').easyModal();
       $('#m4').easyModal();
       $('#m5').easyModal();

});




});