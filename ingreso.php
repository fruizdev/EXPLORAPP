<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<?php include 'inc/head_common.php'; ?>
	<title>Fase 1</title>
</head>
<body>
   <?php include 'inc/head.php' ?>
   	
   	<div id="ingreso-contain">
   		
   		<form action="php/insertar.php" method="post" name="form">
   			<input type="text" name="nombre"> <br> <br>
   			<input type='password' name="pw"> <br> <br>
   			<input type='submit' value="insertar datos" > <br> <br>


   		</form>

   		<?php
		

		$archivo1='php/visitas.txt';
		$archivo2='php/visitas-extremofilos.txt';
		$archivo3='php/visitas-monteverde.txt';
		$archivo4='php/visitas-mem.txt';

		$abre1=fopen($archivo1,'r');
		$abre2=fopen($archivo2,'r');
		$abre3=fopen($archivo3,'r');
		$abre4=fopen($archivo4,'r');

		$total1=fread($abre1,filesize($archivo1));
		$total2=fread($abre2,filesize($archivo2));
		$total3=fread($abre3,filesize($archivo3));
		$total4=fread($abre4,filesize($archivo4));

		$visitas=$total4+$total3+$total2+$total1;

		$por1=$total1*100/$visitas;
		$por1=intval($por1,10);

		$por2=$total2*100/$visitas;
		$por2=intval($por2,10);

		$por3=$total3*100/$visitas;
		$por3=intval($por3,10);

		$por4=$total4*100/$visitas;
		$por4=intval($por4,10);

		echo "HOME: <b>$total1 </b> visitas - <b>$por1 </b> %"; 
		echo "<br>";
		echo "extremofilos: <b>$total2 </b> visitas - <b>$por2 </b> %";
		echo "<br>";
		echo "monteverde: <b>$total3 </b> visitas - <b>$por3 </b> %";
		echo "<br>";
		echo "juego de memoria: <b>$total4 </b> visitas - <b>$por4 </b> %";




		?>

   	</div>
		




	<style>

#ingreso-contain{
	padding: 10px;
	margin: 0 auto;
	border: 2px solid black;
	border-radius: 10px;
	width: 80%;


}</style>

	<?php include 'inc/foot_common.php'; ?>
</body>
</html>