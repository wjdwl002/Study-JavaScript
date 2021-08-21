//Spread Operator 펼침연산자

let pre = ["apple", "orange", 100];
let newData = [...pre];
console.log(newData);
console.log(pre == newData);
console.log(pre === newData); //false;