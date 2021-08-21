//WeakMap 활용 클래스 인스턴스 변수 보호하기

const wm = new WeakMap();

function Area(height, width){
    wm.set(this, {height, width});
}

Area.prototype.getArea = function(){
    const {height, width} = wm.get(this);
    return height * width;
}

let myArea = new Area(20,30);
console.log(myArea.getArea());
console.log(myArea.height);
console.log(myArea.width); //undefined