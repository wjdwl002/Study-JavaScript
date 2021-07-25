var M = {
    v:'v',
    f:function(){
        console.log(this.v);
    }
}

var part = require('./module-part.js');
console.log(part); // 객체 자체 출력
M.f();
part.f(); //동일한 결과 출력