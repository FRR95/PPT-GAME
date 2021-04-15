<?php

<<<<<<< HEAD
header("Access-Control-Allow-Origin: http://localhost/phpmyadmin/index.php");
$conectar = mysqli_connect('localhost','fran','18Noviembre95', 'fran');


=======

$conectar = mysqli_connect('localhost','root','18NOVIEMBRE95', 'stats');

header('Access-Control-Allow-Origin': 'localhost:3306');
exit;
>>>>>>> cc647467e4a3e5a2c2aa8a59f9ed137ff8d11744
if(!$conectar){
    echo "No conectado";
}
else{

$playerwins = $_POST['playerwins'];
$machinewins = $_POST['machinewins'];

$sql = "INSERT INTO playerstats(playerwins,machinewins)values('$playerwins','$machinewins')";

$ejecutar = mysqli_query($conectar, $sql);
}

if(!$ejecutar){
    echo "Hay algun error";
}
else{
    echo "Datos almacenados correctamente";
}
?>