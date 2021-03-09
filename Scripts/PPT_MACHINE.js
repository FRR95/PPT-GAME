var PPTApp = angular.module('PPTApp', []);






    PPTApp.controller('PPTController', function($scope) {
    
      $scope.OptionsPlayer1 = ["Piedra", "Papel", "Tijera"];
     
      $scope.MachineArray = [
        {
            value: "Piedra"
        },
        {
            value: "Papel"
        },
        {
          value: "Tijera"
      },

    ];
    
     
      
      
     
      $scope.ShowResult = false;
      $scope.Player1Selection = $scope.OptionsPlayer1[0];

      
     
      $scope.FunctionResult = function () {
        $scope.ShowResult = true;
        $scope.RandomMachineAnswer = $scope.MachineArray[Math.floor(Math.random() * $scope.MachineArray.length)];
        
       if($scope.Player1Selection=='Piedra' && $scope.RandomMachineAnswer.value=='Tijera'){
        $scope.Player1Wins = $scope.Player1Wins + 1;
        $(document).ready(function(){
        $("#Result").html('Jugador 1 gana');
        });
      }
      if($scope.Player1Selection=='Papel' && $scope.RandomMachineAnswer.value=='Piedra'){
        $scope.Player1Wins = $scope.Player1Wins + 1;
        $(document).ready(function(){
          $("#Result").html('Jugador 1 gana');
          });
      
       }
       if($scope.Player1Selection=='Tijera' && $scope.RandomMachineAnswer.value=='Papel'){
        $scope.Player1Wins = $scope.Player1Wins + 1;
        $(document).ready(function(){
          $("#Result").html('Jugador 1 gana');
          });
      
       }

       if($scope.Player1Selection=='Tijera' && $scope.RandomMachineAnswer.value=='Piedra'){
        $scope.MachineWins = $scope.MachineWins + 1;
        $(document).ready(function(){
          $("#Result").html('La máquina gana');
          });
      }
      if($scope.Player1Selection=='Piedra' && $scope.RandomMachineAnswer.value=='Papel'){
        $scope.MachineWins = $scope.MachineWins + 1;
        $(document).ready(function(){
          $("#Result").html('La máquina gana');
          });
      
       }
       if($scope.Player1Selection=='Papel' && $scope.RandomMachineAnswer.value=='Tijera'){
        $scope.MachineWins = $scope.MachineWins + 1;
        $(document).ready(function(){
          $("#Result").html('La máquina gana');
          });
      
       }

       if($scope.Player1Selection==$scope.RandomMachineAnswer.value){
       
        $(document).ready(function(){
          $("#Result").html('Empate');
          });
      
       }
      
      
      
      }
      $scope.hideresult = function () {

        $scope.ShowResult = false;
    
      }
     
      
     
    });




