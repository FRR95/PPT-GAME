<?php 

	$conectar=mysqli_connect('localhost','fran','18Noviembre95','fran');

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

	<table class="score_results">
		<tr>
		    <td>Resultado</td>
			<td>Jugador</td>
			<td>Máquina</td>
			
		</tr>

		<?php 
		$sql="SELECT * FROM `playerstats1`";
		$result=mysqli_query($conectar,$sql);

		while($mostrar=mysqli_fetch_array($result)){
		 ?>

		<tr class="color_state">
		    <td><?php echo $mostrar['states'] ?></td>
			<td><?php echo $mostrar['playerwins'] ?></td>
			<td><?php echo $mostrar['machinewins'] ?></td>
	
		</tr>
	<?php 
	}
	 ?>
	</table>

</body>
</html>