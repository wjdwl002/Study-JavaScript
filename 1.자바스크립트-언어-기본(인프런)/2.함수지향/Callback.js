//<2. 함수지향 - 콜백(Callback)>

//자바스크립트의 함수는 객체이자 값이기 때문에 다른 객체 안의 값으로 정의될 수도 있다.

//      1. 리턴값으로의 함수의 사용
function cal(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right} 
    }
    return funcs[mode];
};

console.log(cal('plus')(2,1));
console.log(cal('minus')(2,1));


//      2. 배열으로서의 함수의 사용
var process = [
    function(input){return input+10;},
    function(input){return input*input;},
    function(input){return input /2;}
];
var input = 1;
for (var i =0; i<process.length;i++){
    input = process[i](input);
    console.log(input);
}


//      3. 콜백
var numbers = [9,8,7,6,5,4,3,2,1,10,20];
var sortfunc = function(a,b){ //콜백함수
    //if(a>b) return 1;
    //else if (a<b) return -1;
    //else return 0;
    return a-b;
}
console.log(numbers.sort(sortfunc));
