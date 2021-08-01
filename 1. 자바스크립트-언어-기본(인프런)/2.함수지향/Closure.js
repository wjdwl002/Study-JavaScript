//<2. 함수지향 - 클로저(Closure)>

//클로저 : 내부함수가 외부함수의 맥락에 접근하는 것

//      1. 내부함수와 외부함수
function outter(){ //외부함수
    var title = 'coding everybody';
    function inner(){ //내부함수 -> 외부함수의 변수인 title 접근 가능
        console.log(title);
    }
    inner();
}
outter();


//      2. 내부함수와 외부함수(2)
function outter(){
    var title = 'coding everybody';
    return function (){
        console.log(title);
    }
}
inner = outter(); //내부함수가 정의되는 시점에 외부함수는 이미 종료되었음에도 접근 가능함
inner();


//      3. private variable
function factory_movie(title){
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            title = _title;
        }
    }
}
ghost = factory_movie("Ghost in the shell");
matrix = factory_movie("Matrix");

console.log(ghost.get_title());
console.log(matrix.get_title());

ghost.set_title('My kind ghost');

console.log(ghost.get_title());
console.log(matrix.get_title());


//      4. 응용
//(1) 잘못된 예시
var arr = []
for (var i = 0; i<5; i++){
    arr[i] = function(){
        return i;
    }
}
for(var index in arr){
    console.log(arr[index]()); // 5만 다섯번 출력 (X)
} 

//(2) 수정
var arr = []
for (var i = 0; i<5; i++){
    arr[i] = function(id){
        return function(){
            return id;
        }
    }(i); // 바로 호출
}
for (var index in arr){
    console.log(arr[index]());
}