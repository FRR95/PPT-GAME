<?php


$conectar = mysqli_connect('localhost','root','18NOVIEMBRE95', 'stats');

header('Access-Control-Allow-Origin': 'localhost:3306');
exit;
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