app.controller('configController',['$scope','$location',function($scope,$location){
    $scope.goBack = function(){
        $location.path("/index");
    }
}]);