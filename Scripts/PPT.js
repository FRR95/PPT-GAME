/* var app = angular.module('appppt', []);

var a = "Piedra";
var b = "Papel";
var c = "Tijera";
var MachineAnswer = window['abc'.charAt(Math.floor(Math.random()*3))];


app.controller('pptcontroller', function($scope) {
$scope.names = ["Piedra", "Papel", "Tijeras"];

$scope.ShowResult = false;


$scope.Func_PPT = function() {
  $scope.getRandomIndex = function(length){
    return Math.floor(Math.random() * length);
}
    $scope.quotes = [
        {
            value: "q1"
        },
        {
            value: "q2"
        },

    ];

  $(document).ready(function(){

  
   
 
    $('#MachineResult').html("La maquina ha elegido: " +MachineAnswer);
   
   
  });
    $scope.ShowResult = !$scope.ShowResult;
  } 
});
*/

var a = "Piedra";
var b = "Papel";
var c = "Tijera";
var MachineAnswer = window['abc'.charAt(Math.floor(Math.random()*3))];


var PPTApp = angular.module('PPTApp', []);
    PPTApp.controller('PPTController', function($scope) {
    
      $scope.OptionsPlayer = ["Piedra", "Papel", "Tijera"];
      
     
      $scope.ShowResult = false;
      $scope.PlayerSelection = $scope.OptionsPlayer[0];
      $scope.Func_PPT = function() {
        $(document).ready(function(){

          
   
 
          $('#MachineResult').html("La maquina ha elegido: " +MachineAnswer);
         
         
        });
       
      $scope.ShowResult = !$scope.ShowResult;
  

    
    }
    });




