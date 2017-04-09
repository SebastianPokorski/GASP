// var name = prompt("Jak masz na imię ? :) ")

var app = angular.module('calc',[]);

app.controller('myCalc',  ["$scope", function($scope){

// notacja DI odpornana minimalizencje kodu

	$scope.value = "";
	$scope.memory = null; // myCalc memory = keeps value of numbers
	$scope.operator = null;
	
	$scope.saveInMemory = function() {
		if($scope.memory === null){
			$scope.memory = parseFloat($scope.value)
		}else {$scope.memory = parseFloat($scope.results)}
	};

	$scope.math = function(a){     //math operations
	 	$scope.saveInMemory();
	 	$scope.operator = a;
	 	$scope.value = ""; 
	 	$scope.results = name + "! " + "Tu pojawi się Twój wynik";
	 	
	};

	$scope.clensing = function(){  // clears everything :)
	 	$scope.memory = null;
	 	$scope.value = null;
	 	$scope.results = "Kalkulator zresetowany :)";
	 	document.getElementById('result').style.display='none';
	 		};

	$scope.sumItUp = function(){
		
		if($scope.operator == '+'){
			$scope.results = $scope.memory + parseFloat($scope.value);
		}else if($scope.operator == '-'){
			$scope.results = $scope.memory - parseFloat($scope.value);
		}else if($scope.operator == '*'){
			$scope.results = $scope.memory * parseFloat($scope.value);
		}else if($scope.operator == '/'){
			$scope.results = $scope.memory / parseFloat($scope.value);
		};
	};
	
}]);
