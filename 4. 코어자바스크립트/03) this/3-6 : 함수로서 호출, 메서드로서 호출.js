var func = function(x){
    console.log(this,x);
};
func(1);// this = window 객체

var obj = {
    method : func,
    varA : 1,
    varB : 2
};
obj.method(2);// this = obj
