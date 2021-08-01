//<2. 함수지향 - 유효범위 (Scope)>

//      1. 전역변수와 지역변수
var vscope = 'gloabl';
function fscope(){
    var vscope = 'local';
    var lv = 'local variables';
    alert(vscope);
}

fscope(); //-> 'local' 출력
alert(vscope); //-> 'global' 출력
alert(lv); //-> undefined 출력 


//      2. 전역변수 사용법
(function(){ //익명함수
    var MYAPP = {} //익명함수 내의 지역변수
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }
    MYAPP.coordinate = {
        'left':null,
        'right':null
    }
    MYAPP.calculator.left=10;
    MYAPP.calculator.right=20;
    function sum (){
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    document.write(sum());
}())


//      3. 정적 유효범위: 사용될 때가 아니라 정의될 때의 전역변수가 사용됨
var i = 5;
function a(){
    var i = 10;
    b();
}
function b(){
    document.write(i); //-> 5 출력
}
a();