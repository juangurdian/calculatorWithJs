function val(result){
    form.disp.value = form.disp.value + result;
}
function calculate(){
    if(form.disp.value == ""){
        alert("Please enter numbers");
    }else{
        form.disp.value = eval(form.disp.value);
    }
}

function func(){
    form.disp.value = "";
}