let mySet = new Set();
console.log(toString.call(mySet));

//set : 중복없이 유일한 값을 저장하려고 할 때, 이미 존재한 값을 체크할때 유용

mySet.add("crong");
mySet.add("hary");
mySet.add("crong");

console.log(mySet.has("crong"));

mySet.forEach(function(v) { console.log(v); })
