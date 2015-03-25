app.controller("mainController",['$scope','tabs','ngDialog','$location','message',function($scope,tabs,ngDialog,$location,message){
    var scope;
    function init(){
        scope = $scope;
        $scope.tabsGroups = tabs.getTabsGroups();
        $scope.placeholder = "Search...";
    }
    init();

    $scope.createTabsGroup = function(){
        ngDialog.openConfirm({
            template:"template/dialogTml/createTabsGroup.html",
            className: 'ngdialog-theme-plain',
            controller:function($scope){
                $scope.save = function(title){
                    var promise = tabs.createTabsGroup(title);
                    promise.then(function(){
                        scope.tabsGroups = tabs.getTabsGroups();
                    });
                };
            }
        });
    };
    $scope.go2config = function(){
        $location.path("/config");
    };
    $scope.go2tabsGroupDetail = function(id){
        message.set({
            tabsGroupId: id
        });
        $location.path("/tabsGroupDetail");
    };
    $scope.openTab = function(tab){
        tabs.openTab(tab);
    };
    $scope.openAllTabs = function(_tabs){
        tabs.openTabs(_tabs);
    };
    $scope.removeTabsGroup = function(id){
        ngDialog.openConfirm({
            template:"template/dialogTml/removeTabsGroup.html",
            className: 'ngdialog-theme-plain',
            controller:function($scope){
                $scope.remove = function(){
                    tabs.removeTabsGroup(id);
                    scope.tabsGroups = tabs.getTabsGroups();
                }
            }
        });
    }
}]);
