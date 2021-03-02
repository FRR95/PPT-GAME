var PPTApp = angular.module('PPTApp', []);






    PPTApp.controller('PPTController', function($scope) {
    
      $scope.OptionsPlayer1 = ["Piedra", "Papel", "Tijera"];
      $scope.OptionsPlayer2 = ["Piedra", "Papel", "Tijera"];
     
     
      
      
     
      $scope.ShowResult = false;
      $scope.Player1Selection = $scope.OptionsPlayer1[0];
      $scope.Player2Selection = $scope.OptionsPlayer2[0];
     
     
     
      
      $scope.Func_PPT = function() {
       
        $scope.ShowResult = !$scope.ShowResult;
        
      
      }
    });




