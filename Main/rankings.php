<?php 

	$conectar=mysqli_connect('localhost','fran','18Noviembre95','fran');

 ?>


<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>    





<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>	
<link rel="stylesheet" href="../Styles/CommonStyle.css">
<img class="ImgIndex" src="../IMGS/PPT.png" alt="Girl in a jacket" width="512" height="512">
<a href="Index.html" >Volver al menú principal</a>
<title>RANKING</title>
</head>
<body>

<br>

	<table id="table" class="score_results">
	<thead>
		<tr>
		    <td>Resultado</td>
			<td>Jugador</td>
			<td>Máquina</td>
			
		</tr>
	</thead>
		<?php 
		$sql="SELECT * FROM `playerstats1`";
		$result=mysqli_query($conectar,$sql);

		while($mostrar=mysqli_fetch_array($result)){
		 ?>
    <tbody>
		<tr>
		    <td><?php echo $mostrar['states'] ?></td>
			<td><?php echo $mostrar['playerwins'] ?></td>
			<td><?php echo $mostrar['machinewins'] ?></td>
	
		</tr>
		</tbody>
	<?php 
	}
	 ?>

	</table>


</body>
<script>
$(function() {
  $('#table td:last-child:contains(5)').closest('tr').css('background-color', '#F84646');
  $('#table td:nth-child(2):contains(5)').closest('tr').css('background-color', 'rgb(79, 155, 226)');
  
 

});	
</script>
</html>