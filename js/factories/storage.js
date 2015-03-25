app.factory("storage",[function(){
    function getAll(s){
        var items = [];
        for ( var i = 0, len = localStorage.length; i < len; ++i ) {
            if(s == undefined){
                items.push(JSON.parse(localStorage.getItem( localStorage.key( i ) )));
            }else{
                if(localStorage.key(i).indexOf(s) > -1){
                    items.push(JSON.parse(localStorage.getItem( localStorage.key( i ) )));
                }
            }
        }
        return items;
    }
    function _get(id){
        return JSON.parse(localStorage.getItem(id));
    }
    function _set(id,obj){
        localStorage.setItem(id, JSON.stringify(obj));
    }
    function remove(id){
        localStorage.removeItem(id);
    }
    return{
        tabsGroups:{
            getAll:function(){
                var tabs = getAll("tabsGroup");
                return tabs;
            },
            getItem: function(id){
                return _get("tabsGroup."+id);
            },
            setItem: function(id,obj){
                _set("tabsGroup."+id, obj);
            },
            removeItem: function(id){
                remove("tabsGroup."+id);
            }
        }
    }
}]);
