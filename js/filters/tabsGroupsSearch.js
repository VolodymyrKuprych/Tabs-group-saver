app.filter('tabsGroupsSearch',function(){
    return function(tabsGroups,title){
        if(title == undefined || title == ""){
            return tabsGroups;
        }

        var newItems = [];
        for(var i = 0; i < tabsGroups.length; i++){
            if(tabsGroups[i].title.indexOf(title) > -1){
                newItems.push(tabsGroups[i]);
            }
        }
        return newItems;
    }
});