


function getNum(number){
    var result=document.getElementById('result');
    result.value +=number;
    console.log(result.value)
}

function clears(){
    var result=document.getElementById('result');
    result.value='';
}
function getResult(){
    var result=document.getElementById("result");
    // 
    console.log(result.value);
    result.value = eval(result.value)
}
