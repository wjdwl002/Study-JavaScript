//<3. 객체지향 - 객체 (Object)>

// 모든 객체의 부모는 Object라는 객체

//      1. Object API
var arr = ['a','b','c'];
console.log('Object.keys(arr',Object.keys(arr));

var o = new Object();
console.log('o.toString()',o.toString());

var a = new Array(1,2,3);
console.log('a.toString()',a.toString());


//      2. Object 확장 -> Object에 메소드를 추가하면 모든 객체에 그 메소드가 추가됨
Object.prototype.contain = function(neddle){
    for (var name in this){
        if(this[name]===neddle){ return true; }
    }
    return false;
}
var o = {'name':'esther','age':23,'city':'SeoCheon'}
console.log(o.contain('esther'));
var a = ['esther','jiwon','Joung']
console.log(o.contain('jiwon'));