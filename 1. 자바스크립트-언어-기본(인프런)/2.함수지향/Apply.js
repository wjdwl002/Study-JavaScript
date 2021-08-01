//<2. 함수지향 - 함수의 호출(Apply)

o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10, v2:50, v3:100, v4:25} // name : this[name]
function sum(){
    var _sum = 0;
    for (name in this){
        _sum += this[name];
    }
    return _sum;
}
console.log(sum.apply(o1));
console.log(sum.apply(o2));
