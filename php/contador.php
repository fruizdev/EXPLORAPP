

<?php
$cuenta = "visitas.txt"

function contador($cuenta){
	$fp=fopen($cuenta,r);
	$num=fgets($fp,5);
	$num+=1;
	print "numero de visitas: ";
	echo $num;
	exec("rm-rf $cuenta");
	exec("echo $num >$cuenta");
	
}
if(!file_exists($cuenta)){
	exec("echo 1>$cuenta");

} 
contador($cuenta);

?>


