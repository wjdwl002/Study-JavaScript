//<3. 객체지향 - 생성자(Initializer) & New>

//      1. 객체
var person = {
    'name': 'egoing',
    'introduce': function () {
        return 'My name is ' +this.name;
    }
}


//      2. 생성자와 new
function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is ' + this.name;
    }
}
var p1 = new Person('Dubu');
console.log(p1.introduce());
var p2 = new Person('Jiwon');
console.log(p2.introduce());

