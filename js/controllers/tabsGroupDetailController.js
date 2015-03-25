app.controller("tabsGroupDetailController",['$scope','$location','message','tabs','ngDialog',function($scope,$location,message,tabs,ngDialog){
    var tabsGroupId;
    var tabsGroup;
    var scope = $scope;
    var init = function(){
        tabsGroupId = message.get().tabsGroupId;
        tabsGroup = tabs.getTabsGroup(tabsGroupId);
        $scope.tabsGroup = tabsGroup;
    };
    init();
    $scope.goBack = function(){
        $location.path("/index");
    };
    $scope.removeTab = function(idTab){
        ngDialog.openConfirm({
            template:"template/dialogTml/removeTab.html",
            className: 'ngdialog-theme-plain',
            controller:function($scope){
                $scope.remove = function(){
                    tabsGroup = tabs.removeTab(tabsGroup,idTab);
                    scope.tabsGroup = tabsGroup;
                }
            }
        });

    };
    $scope.editTabsGroupTitle = function(){
        ngDialog.openConfirm({
            template:"template/dialogTml/editTabsGroupTitle.html",
            className: 'ngdialog-theme-plain',
            controller:function($scope){
                $scope.edit = function(title){
                    tabsGroup = tabs.editTabsGroupTitle(tabsGroup,title);
                    scope.tabsGroup = tabsGroup;
                }
            }
        });
    }
}]);