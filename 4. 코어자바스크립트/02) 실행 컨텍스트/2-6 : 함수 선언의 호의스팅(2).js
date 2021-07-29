function a(){
    console.log(b); //function
    var b = 'bbb';
    console.log(b); //'bbb'
    function b(){};
    console.log(b); //'bbb'
}

a();