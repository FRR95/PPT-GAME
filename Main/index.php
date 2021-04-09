<?php 

	$conectar=mysqli_connect('localhost','root','18NOVIEMBRE95','stats');

 ?>


<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="../Styles/CommonStyle.css">
<img class="ImgIndex" src="../IMGS/PPT.png" alt="Girl in a jacket" width="512" height="512">
<a href="Index.html" >Volver al menú principal</a>
<title>RANKING</title>
</head>
<body>

<br>

	<table  >
		<tr>
			<td>Jugador</td>
			<td>Máquina</td>
			
		</tr>

		<?php 
		$sql="SELECT * from stats.playerstats";
		$result=mysqli_query($conectar,$sql);

		while($mostrar=mysqli_fetch_array($result)){
		 ?>

		<tr>
			<td><?php echo $mostrar['jugador'] ?></td>
			<td><?php echo $mostrar['máquina'] ?></td>
	
		</tr>
	<?php 
	}
	 ?>
	</table>

</body>
</html>