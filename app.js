let app = angular.module("calculatorApp", []);
app.controller("CalculatorController", function($scope, $http){
    $http.get("stages.json")
    .then(function(response){
        $scope.stages = response.data;
        console.log($scope.stages);
    })
})