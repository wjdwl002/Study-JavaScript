//<2. 함수지향 - Arguments>

// 자바스크립트는 매우 관대한 언어라서 parameters != arguments 여도 에러 나지 않음

//      1. Arguments : 유사 배열 
function sum(){
    var i, _sum = 0;
    for (i = 0; i<arguments.length;i++){
        console.log(i+' : '+arguments[i]+'<br />');
        _sum += arguments[i];
    }
    return _sum;
}
console.log('result : ' + sum(1,2,3,4));


//      2. 매개변수의 수
function zero(){
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}
function one(arg1){
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}
function two(arg1, arg2){
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}
zero();               // zero.length 0 arguments 0 
one('val1', 'val2');  // one.length 1 arguments 2 
two('val1');          // two.length 2 arguments 1