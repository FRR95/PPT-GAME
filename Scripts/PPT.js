var PPTApp = angular.module('PPTApp', []);






    PPTApp.controller('PPTController', function($scope) {
    
      $scope.OptionsPlayer1 = ["Piedra", "Papel", "Tijera"];
      $scope.OptionsPlayer2 = ["Piedra", "Papel", "Tijera"];
     
     
      
      
     
      $scope.ShowResult = false;
      $scope.Player1Selection = $scope.OptionsPlayer1[0];
      $scope.Player2Selection = $scope.OptionsPlayer2[0];
     
      $scope.FunctionResult = function () {
        $scope.ShowResult = true;
        
        
       if($scope.Player1Selection=='Piedra' && $scope.Player2Selection=='Tijera'){
        $scope.Player1Wins = $scope.Player1Wins + 1;
      }
      if($scope.Player1Selection=='Papel' && $scope.Player2Selection=='Piedra'){
        $scope.Player1Wins = $scope.Player1Wins + 1;
      
       }
       if($scope.Player1Selection=='Tijera' && $scope.Player2Selection=='Papel'){
        $scope.Player1Wins = $scope.Player1Wins + 1;
      
       }

       if($scope.Player1Selection=='Tijera' && $scope.Player2Selection=='Piedra'){
        $scope.Player2Wins = $scope.Player2Wins + 1;
      }
      if($scope.Player1Selection=='Piedra' && $scope.Player2Selection=='Papel'){
        $scope.Player2Wins = $scope.Player2Wins + 1;
      
       }
       if($scope.Player1Selection=='Papel' && $scope.Player2Selection=='Tijera'){
        $scope.Player2Wins = $scope.Player2Wins + 1;
      
       }

      
      
      }
      $scope.hideresult = function () {

        $scope.ShowResult = false;
    
      }
     
      
     
    });




