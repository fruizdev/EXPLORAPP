$(document).ready(function() {	
 
///ENTRAR A MENU EXTREMOFILOS


  //PINCHAR CUADRO SABIAS QUE	
    $('#sabiasqueExt').click(function(){
		 $(this).addClass('animated fadeOutUp');
      $(this).fadeOut(1000,function(){
        $('#termometros').fadeIn(1000);
        $('#termometros').css('visibility', 'visible'); 
    }); });

 ///PINCHAR EL TERMOMETRO DE CALOR
  $('#calor').click(function(){
    $('#termometros').fadeOut(500,function(){
       $('#info1').css('visibility', 'visible'); 
       $('#volcan').css('visibility', 'visible'); 
       $('#info1').fadeIn(1000, function(){
           $('#volcan').fadeIn(500);
       });  
    });});

/// PINCHAR TERMOMETRO DE FRIO
 $('#frio').click(function(){
    $('#termometros').fadeOut(500,function(){
       $('#info2').css('visibility', 'visible'); 
       $('#glaciar').css('visibility', 'visible'); 
       $('#info2').fadeIn(1000, function(){
           $('#glaciar').fadeIn(500);
       });  
    });});
///CLICK - ZOOM A MICRO TERMOFILOS
  $("#termo").click(function() {
   
    $('.listaInfo').css('visibility','visible');
  });


///ZOOM A MICRO PSICROFILOS
  $("#psicro").click(function() {
    
    $('.listaInfo').css('visibility','visible');

  });


 ///CAMBIAR DE TERMOMETRO
 $("#cambioTerm").click(function() { 
    $('.paisaje').hide(500,function(){
      $('#termometros').show(1000);
      $('#termometros').css('visibility', 'visible');         
    });    
  });

///BPOPUP VIDEO
$('.li3').bind('click', function(e) {
    e.preventDefault();
    $('#popLista3').bPopup();
    });

///BPOPUP QUE ES UN TERMOFILO
$('.li1Termo').bind('click', function(e) {
    e.preventDefault();
    $('#queEsTermo').bPopup();
    });

///BPOPUP QUE ES UN PSICROFILO
$('.li1Psicro').bind('click', function(e) {
    e.preventDefault();
    $('#queEsPsicro').bPopup();
    });

/// COMIC SUPER BACTERIAS= BPOPUP + BOOKLET + LUPA
$('.li4').bind('click',function(e) {
    e.preventDefault();  
     $('#mag-sb-1').magnify();
     $('#mag-sb-2').magnify();
     $('#mag-sb-3').magnify();
     $('#mag-sb-4').magnify();
     $('#mag-sb-5').magnify();
     $('#mag-sb-6').magnify();
     $('#mag-sb-7').magnify();
     $('#mag-sb-8').magnify();
     $('#mag-sb-9').magnify();
     $('#mag-sb-10').magnify();
     $('#mag-sb-11').magnify();
     $('#mag-sb-12').magnify();
     $('#comic-SB').booklet({arrows: true,width:1080,height:700,covers:true,autoCenter:true,pagePadding:0,hoverWidth:50});
     $('#comic-SB').bPopup({modalClose:true});

});
/// COMIC SUPER EXTREMOFILOS= BPOPUP + BOOKLET + LUPA
$('.li5').bind('click',function(e) {
    e.preventDefault();
     $('#mag-se-1').magnify();
     $('#mag-se-2').magnify();
     $('#mag-se-3').magnify();
     $('#mag-se-4').magnify();
     $('#mag-se-5').magnify();
     $('#mag-se-6').magnify();
     $('#mag-se-7').magnify();
     $('#mag-se-8').magnify();
     $('#comic-SE').booklet({arrows: true,width:1080,height:700,covers:true,autoCenter:true,pagePadding:0,hoverWidth:50});
     $('#comic-SE').bPopup({modalClose:true});

});

 $(' .listaInfo >ul>li').hover(function(){
    $(this).css('cursor', 'pointer');
    $(this).addClass('animated rollIn');

 });

$('#termo').click(function(){
  
        $('#termozoom').trigger('openModal');
       
   
 
});

$(function() {
    $('#termozoom').easyModal();
});




// $('.li2Juego').bPopup({
//             content:'iframe', //'ajax', 'iframe' or 'image'
//             contentContainer:'#divContenedor',
//             loadUrl:'mem/index.html' //Uses jQuery.load()
//         });






});


