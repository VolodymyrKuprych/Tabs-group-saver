var app = angular.module("tabsApp",[
    'ngRoute',
    'ngDialog'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/index', {
                templateUrl: 'template/main.html',
                controller: 'mainController'
            }).
            when('/tabsGroupDetail', {
                templateUrl: 'template/tabsGroupDetail.html',
                controller: 'tabsGroupDetailController'
            }).
            when('/config', {
                templateUrl: 'template/config.html',
                controller: 'configController'
            }).
            otherwise({
                redirectTo: '/index'
            });
    }]);