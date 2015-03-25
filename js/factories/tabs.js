app.factory("tabs",['$q','storage','uuid',function($q,storage,uuid){
    return{
        createTabsGroup:function(tabsGroupTitle){
            var deferred = $q.defer();
            chrome.tabs.query({},function getTabs(_tabs){
                var tabs = _tabs;
                for(var i = 0; i < tabs.length; i++){
                    var title = tabs[i].title;
                    var url = tabs[i].url;
                    var favIconUrl = tabs[i].favIconUrl;
                    tabs[i] = {
                        id: uuid.generate(),
                        title: title,
                        url: url,
                        favIconUrl: favIconUrl
                    };
                }
                var tabsGroupId = uuid.generate();
                var tabsGroup = {
                    tabs: tabs,
                    title: tabsGroupTitle,
                    id: tabsGroupId
                }
                storage.tabsGroups.setItem(tabsGroupId, tabsGroup);
                deferred.resolve("");
            });
            return deferred.promise;
        },
        getTabsGroups:function(){
            return storage.tabsGroups.getAll();
        },
        getTabsGroup:function(id){
            return storage.tabsGroups.getItem(id);
        },
        removeTabsGroup:function(id){
            storage.tabsGroups.removeItem(id);
        },
        removeTab: function(tabsGroup,idTab){
            for(var i = 0; i < tabsGroup.tabs.length; i++){
                if(tabsGroup.tabs[i].id == idTab){
                    tabsGroup.tabs.splice(i,1);
                    storage.tabsGroups.setItem(tabsGroup.id, tabsGroup);
                }
            }
            return tabsGroup;
        },
        editTabsGroupTitle: function(tabsGroup,title){
            tabsGroup.title = title;
            storage.tabsGroups.setItem(tabsGroup.id, tabsGroup);
            return tabsGroup;
        },
        openTab:function(tab){
            var properties = {
                url: tab.url,
                active: false
            };
            chrome.tabs.create(properties, function(){});
        },
        openTabs:function(tabs){
            for(var i = 0; i < tabs.length; i++){
                this.openTab(tabs[i]);
            }
        }
    }
}]);
