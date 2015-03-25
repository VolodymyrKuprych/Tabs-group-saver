app.factory("message",[function(){
    var message = {};
    return {
        set: function(_message){
            message = _message;
        },
        get: function(){
            return message;
        }
    }
}]);
