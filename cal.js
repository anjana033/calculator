let display =document.getElementById("display");
let expression ='';
function addtodisplay(val)
{
    console.log(val);
    expression = expression+val;
    display.value= expression;
}
function calculate(){
let result=eval(expression);
display.value=result;
}
function clearerror()
{
    expression ='';
    display.value ='';
}