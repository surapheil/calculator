//selecting  all the buttons and dislplay
const display = document.querySelector('.display');
const numbers =document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator')
const clear =document.querySelector('.clear');

let firstNumber = '';
let secondNumber = '';
let operator =''
let plusSign = '+';
let subSign ='-';
let multSign ='*';
let divSign = '/';

//adding event listener for each numbers 
numbers.forEach(number=>{
    number.addEventListener('click',(e)=>{
        if (operator === ''){ //if operator is not clicked
            firstNumber += e.target.textContent;
            buttonDisplay(firstNumber);//calling the display function
        }
        else {
            secondNumber += e.target.textContent;
            buttonDisplay(secondNumber);
        }
    });
});

//adding eventlisteners for the operators 

operators.forEach(ope=>{
    ope.addEventListener('click',(e)=>{
        if (e.target.textContent!== '='){ //when operator is not equal to the '=' sign
            operator += e.target.textContent;
            buttonDisplay(operator);
        }

        else {
           operate(firstNumber,secondNumber,operator); //if operator is equal calling the operate function
           firstNumber = '';
           firstNumber += display.innerHTML;
           secondNumber = '';
           operator = '';
           
           
        }
    });
});



//add 
function add(a,b){
    let A = parseInt(a);
    let B = parseInt(b);
    let result= A+B;
    buttonDisplay(result);
 
}

//subtract
function subtract(a,b){
    let result = (a-b);
    buttonDisplay(result);
}

//multiplay
function multiply(a,b){
    let result=(a*b);
    buttonDisplay(result);
}

//division
function divide(a,b){
    let result = '';
  if (b == 0){
    result = 'infinite';
  }
  else{
      result = (a/b); 
  }

  buttonDisplay(result);
}

//function that operates the above four operaitons

function operate(a,b,operator){
if (operator==plusSign){
    return add(a,b);
}
else if(operator == subSign){
    return subtract(a,b);
}
else if(operator == multSign){
    return multiply(a,b);
}
else if(operator == divSign){
    return divide(a,b);
}

}

//a function that populates the display when button is clicked

function buttonDisplay(value){
    display.innerHTML = value;
}