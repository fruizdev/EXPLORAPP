<!DOCTYPE html>
<head>
	<meta charset="UTF-8">
	<?php include 'inc/head_common.php' ?>
	<title>J u e g  o  s ~ ~</title>
	<link rel="stylesheet" href="css/brujula.css">	
	<link rel="stylesheet" type="text/css" href="css/memoria.css">
	<link rel="stylesheet" type="text/css" href="css/magnify.css">

</head>

<body style="padding-top:60px">
    
<?php include 'inc/head2.php' ?>

<section id="containJuegoP">
<div id="enlaces">
  <a id="pasaMemoria"> ~>Memoria</a>  <br>
  <a id="pasaLupa"> ~>Lupa</a>  <br>
  <a id="pasaPuzzle"> ~>Puzzle</a>
</div>

<section id="containJuego">
 	<?php include 'inc/memoria.php'; ?>
</section>
<section id="containJuego2">
 	<?php include 'inc/lupa.php'; ?>
</section>
<section id="containJuego3">
 	<?php include 'inc/puzzle.php'; ?>
</section>
</section>

<script type="text/javascript" src="js/juegos.js"></script>


 <div class="ft2" > 
 <img src="img/foot.png"   class="imgfoot"></div> 


<style>
    
.imgfoot{
	max-width: 500px;
	width: 100%;
}
 
 .ft2{
 	padding-top: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 500px;


}

</style>






</body>
</html>