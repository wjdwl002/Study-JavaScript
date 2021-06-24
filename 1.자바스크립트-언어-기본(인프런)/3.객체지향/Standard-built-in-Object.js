//<3. 객체지향 - 표준 내장 객체(Standard Built-in Object)>

//      1. 배열의 확장 (1)
var arr = new Array('Seoul','New York','Ladrkh','Busan','Tsukuba');
function getRandomValueFromArray(arr){
    var index = Math.floor(arr.length * Math.random());
    return arr[index];
}
console.log(getRandomValueFromArray(arr));


//      2. 배열의 확장 (2) : (1)과 같은 메소드를 Array라는 객체 안에 넣어줌으로써 소속감(?)을 줌
Array.prototype.rand = function(){
    var index = Math.floor(arr.length * Math.random());
    return this[index];
}
var arr = new Array('Seoul','New York','Ladrkh','Busan','Tsukuba');
console.log(arr.rand());