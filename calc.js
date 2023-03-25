//selecting all the buttons and dislplay
const display = document.querySelector('.display');
const numbers =document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator')
const clear =document.querySelector('.clear');
const backspace = document.querySelector('.delete');
const screen = document.querySelector('.expression')

let expression = '';
let operator =''
let plusSign = '+';
let subSign ='-';
let multSign ='*';
let divSign = '/';
let modules ='%';

//adding event listener for each numbers 
numbers.forEach(number=>{
number.addEventListener('click',(e)=>{
if (e.target.textContent !== '='){
expression += e.target.textContent;
console.log(expression);
screen.innerHTML = expression;
}
});
});

//adding eventlisteners for the operators 

operators.forEach(ope=>{
ope.addEventListener('click',(e)=>{
if (e.target.textContent!== '='){ //when operator is not equal to the '=' sign
expression= expression + ' ' + e.target.textContent + ' ';
console.log(expression);
screen.innerHTML=expression;

}

else if(e.target.textContent==='=') {
operaitonsSequence(expression);


}
});
});

//backspace button
backspace.addEventListener('click',(e)=>{
    expression = expression.slice(0,-1);
    screen.innerHTML = expression;
});

//clear button
clear.addEventListener('click',(e)=>{
    screen.innerHTML= 0;
    display.innerHTML= 0;
    expression = '';
});



//function that operates the above four operaitons

function operate(a,operator,b){
    a = Number(a);
    b = Number(b);
    
if (operator==plusSign){
    let A = parseInt(a);
    let B = parseInt(b);
    let result= A+B;
    display.innerHTML = result;
    return result;
}
else if(operator == subSign){
    let result = (a-b);
    display.innerHTML = result;
    return result;
}
else if(operator == multSign){
    let result=(a*b);
    display.innerHTML = result;
    return result;
}
else if(operator == divSign){
    let result = '';
    if (b == 0){
    result = 'infinite';
    }
    else{
    result = (a/b); 
    }
    display.innerHTML = result;
   return result;    
}
else if(operator = modules){
    let result = a % b;
    display.innerHTML = result;
    return result;
}

}



function operaitonsSequence(expression){
expression = expression.split(' ');
const operatorSigns = ['*','/','%','+','-']; 
let firstNumber ;
let secondNumber;
let operatorSymbol;
let indexOfOperate;
let result;
for(let i=0; i < operatorSigns.length;i++){
while(expression.includes(operatorSigns[i])){
indexOfOperate = expression.findIndex(item=>item ===operatorSigns[i]);
firstNumber = expression[indexOfOperate - 1];
operatorSymbol = expression[indexOfOperate];
secondNumber =expression[indexOfOperate+1];
result = operate(firstNumber,operatorSymbol,secondNumber);
expression.splice(indexOfOperate-1,3,result);
console.log(firstNumber);
console.log(operatorSymbol);
console.log(secondNumber);
console.log(result);
}
}

return result;
}
