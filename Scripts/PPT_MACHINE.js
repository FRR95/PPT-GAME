var PPTApp = angular.module('PPTApp', []);






    PPTApp.controller('PPTController', function($scope) {
    
      $scope.OptionsPlayer1 = ["Piedra", "Papel", "Tijera"];
     
    
    $scope.MachineArray = ["Piedra", "Papel", "Tijera"];
     

      
     
      $scope.ShowResult = false;
      $scope.Player1Selection = $scope.OptionsPlayer1[0];

      
     
      $scope.FunctionResult = function () {
        $scope.ShowResult = true;
        $scope.RandomMachineAnswer = $scope.MachineArray[Math.floor(Math.random() * $scope.MachineArray.length)];
        
       if($scope.Player1Selection=='Piedra' && $scope.RandomMachineAnswer=='Tijera'){
        $scope.Player1Wins = $scope.Player1Wins + 1;
        $(document).ready(function(){
        $("#Result").html('Jugador 1 gana');
        });
      }
      if($scope.Player1Selection=='Papel' && $scope.RandomMachineAnswer=='Piedra'){
        $scope.Player1Wins = $scope.Player1Wins + 1;
        $(document).ready(function(){
          $("#Result").html('Jugador 1 gana');
          });
      
       }
       if($scope.Player1Selection=='Tijera' && $scope.RandomMachineAnswer=='Papel'){
        $scope.Player1Wins = $scope.Player1Wins + 1;
        $(document).ready(function(){
          $("#Result").html('Jugador 1 gana');
          });
      
       }

       if($scope.Player1Selection=='Tijera' && $scope.RandomMachineAnswer=='Piedra'){
        $scope.MachineWins = $scope.MachineWins + 1;
        $(document).ready(function(){
          $("#Result").html('La máquina gana');
          });
      }
      if($scope.Player1Selection=='Piedra' && $scope.RandomMachineAnswer=='Papel'){
        $scope.MachineWins = $scope.MachineWins + 1;
        $(document).ready(function(){
          $("#Result").html('La máquina gana');
          });
      
       }
       if($scope.Player1Selection=='Papel' && $scope.RandomMachineAnswer=='Tijera'){
        $scope.MachineWins = $scope.MachineWins + 1;
        $(document).ready(function(){
          $("#Result").html('La máquina gana');
          });
      
       }

       if($scope.Player1Selection==$scope.RandomMachineAnswer){
       
        $(document).ready(function(){
          $("#Result").html('Empate');
          });
      
       }
      /*
       if($scope.Player1Wins==5){
        alert('Jugador gana');
        }
        if($scope.MachineWins==5){
        alert('Máquina gana');
        }
      */
      
      }
      $scope.hideresult = function () {

        $scope.ShowResult = false;
    
      }

     

     
      
     
    });




