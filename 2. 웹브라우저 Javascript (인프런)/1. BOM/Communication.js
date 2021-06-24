//<1. Bom - Communications>

function func_alert(){
    alert("Alert");
}
function func_confirm(){
    if(confirm('OK?')){
        alert('ok');
    }
    else { 
        alert('no');
    }
}
function func_prompt(){
    if(prompt('id?')==='esther'){
        alert('welcome');
    }
    else {
        alert('fail');
    }
}