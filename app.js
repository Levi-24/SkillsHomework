let app = angular.module("calculatorApp", []);
app.controller("CalculatorController", function($scope, $http){
    $http.get("stages.json")
    .then(function(response){
        $scope.stages = response.data;
        console.log($scope.stages);
    })

    $scope.teamMembers = [];
for (let i = 0; i < 10; i++) {
    $scope.teamMembers.push({
        firstName: "",
        lastName: "",
        speed: "",
        totalDistance: 0
    })
}

$scope.updateRunners = function(){
    $scope.runners = [];
    angular.forEach($scope.teamMembers, function(member){
        let fullName = member.firstname + " " + member.lastName;
        if($scope.runners.indexOf(fullName) === -1){
            $scope.runners.push(fullName);
        }
    })
}

$scope.formatTime = function(){
    
}
});