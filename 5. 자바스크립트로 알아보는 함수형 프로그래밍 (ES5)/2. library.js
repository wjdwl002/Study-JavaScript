//1) _filter
function _filter(list,predi){ //응용형 함수 : 함수를 param으로 받음
    var new_list = [];
        for (var i =0; i<list.length; i++){
            if (predi(list[i])) new_list.push(list[i]);
        }
    return new_list;
}

//2) _map
function _map(list, mapper){
    var new_list = [];
    for (var i = 0; i<list.length; i++){
        new_list.push(mapper(list[i]));
    }
    return new_list;
}

//3) _curry, _curryr 
    function _curry(fn){ 
        return function(a, b){
            return arguments.length == 2 ? fn(a, b) : function(b) {return fn(a,b);};
        }
    }

    function _curryr(fn){
        return function(a, b){
            return arguments.length == 2 ? fn(a, b) : function(b) {return fn(b, a);};
        }
    }

//4) _get
var _get = _curryr(function(obj, key){
    return obj == null ? undefined : obj[key];
});

//5) _reduce
var slice = Array.prototype.slice;
function _rest(list, num){
    return slice.call(list, num || 1);
}
function _reduce(list, iter, memo){
    if(arguments.length == 2){
        memo = list[0];
        list = _rest(list);
    }
    _each(list, function(val){
        memo = iter(memo, val);
    })
    return memo;
}

//6) _pipe
function _pipe(){
    var fns = arguments;
    return function(arg){
        return _reduce(fns, function(arg, fn){
            return fn(arg);
        },arg)
    }
}

//7) _go
    function _go(arg){
        var fns = _rest(arguments);
        return _pipe.apply(null, fns)(arg); 
    }
    
//8) _keys
function _is_object(obj){ return typeof obj == 'object' && !!obj; };
function _keys(obj){
    return _is_object(obj) ? Objects.keys(obj) : [];
}


//9) _each
var _length = _get('length');
function _each(list, iter){
    var keys = _keys(list);
    for (var i =0; i<_length(keys); i++){
        iter(list[i]);
    }
    return list;
}