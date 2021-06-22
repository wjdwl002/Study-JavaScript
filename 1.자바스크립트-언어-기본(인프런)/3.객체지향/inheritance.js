//<3. 객체지향 - 상속(Inheritance)>

//      1. 상속
function Person(name){
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name;
}
function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person(); //Person을 상속
Programmer.prototype.coding = function(){
    return "Hello World";
}

var p1 = new Programmer('esther');
console.log(p1.introduce());
console.log(p1.coding());
