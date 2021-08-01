//<3. 객체지향 - this>

//      1. this
var o = {
    func : function(){
        if(o == this){
            console.log("o === this");
        }
    }
}
o.func();


//      2. 생성자와 this
var funcThis = null;
function Func(){
    funcThis = this;
}
var o1 = Func();
if(funcThis === window){
    console.log('window</br>');
}
var o2 = new Func();
if(funcThis === o2){
    console.log('o2 </br>');
}

//      3. apply와 this
var o = {}
var p = {}
function func(){
    switch(this){
        case o:
            console.log('o<br  /');
            break;
        case p:
            console.log('p<br  /');
            break;
        case window:
            console.log('window<br  /');
            break;
    }
}
func();
func.apply(o);
func.apply(p);