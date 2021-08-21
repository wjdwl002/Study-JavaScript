//WeakSet : 참조를 가지고 있는 객체만 저장이 가능
//객체형태를 중복없이 저장하려고 할 떄 유용

let arr = [1,2,3,4];
let myWs = new WeakSet();

myWs.add(arr);
//myWs.add(111);
//myWs.add("111");
myWs.add(function(){});

console.log(myWs);