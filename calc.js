//selecting all the buttons and dislplay
const display = document.querySelector('.display');
const numbers =document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator')
const clear =document.querySelector('.clear');
const backspace = document.querySelector('.delete');
const screen = document.querySelector('.expression');
const pi = document.querySelector('.pi'); 


let expression = '';


//adding event listener for each numbers 
numbers.forEach(number=>{ // iterate through numbers
    number.addEventListener('click',(e)=>{ //when each number is clicked.
        if (e.target.textContent !== '='){ 
        expression += e.target.textContent; // expression will concatinate numbers
        screen.innerHTML = expression;
                }
        });
});

//adding eventlisteners for the operators 
operators.forEach(ope=>{ // iterate through each operator
    ope.addEventListener('click',(e)=>{  // when operator is clicked
        if (e.target.textContent!== '='){ 
        expression= expression + ' ' + e.target.textContent + ' '; // concatinate with space between operator and numbers
        screen.innerHTML=expression;
            }

        else if(e.target.textContent==='=') { // when equal sign pressed calls operation sequence function and expression as aparameter
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

//pi button
pi.addEventListener('click',(e)=>{
    screen.innerHTML = 3.14;
    expression = 3.14;
});



//function that operates the above four operaitons

function operate(a,operator,b){
    a = parseFloat(a);
    b = parseFloat(b);
    
    if (operator=='+'){
        let A = parseFloat(a);
        let B = parseFloat(b);
        let result= A+B;
        display.innerHTML = result.toFixed(2);
        return result;
    }
    else if(operator == '-'){
        let result = (a-b);
        display.innerHTML = result.toFixed(2);
        return result;
    }
    else if(operator == '*'){
        let result=(a*b);
        display.innerHTML = result.toFixed(2);
        return result;
    }
    else if(operator == '/'){
        let result = '';
        if (b == 0){
        result = 'Math Error';
       display.innerHTML = result;
        }
        else{
        result = (a/b); 
        }
      display.innerHTML = result.toFixed(2);
       
    return result;    
    }
    else if(operator = '%'){
        let result = a % b;
        display.innerHTML = result.toFixed(2);
        return result;
    }
}

//order of operation
function operaitonsSequence(expression){
    expression = expression.split(' '); //split expression on space to split numbers and operators
    const operatorSigns = ['*','/','%','+','-']; 

for(let i=0; i < operatorSigns.length;i++){
    while(expression.includes(operatorSigns[i])){
       let indexOfOperate = expression.findIndex(item=>item ===operatorSigns[i]);
       let firstNumber = expression[indexOfOperate - 1];
       let operatorSymbol = expression[indexOfOperate];
       let secondNumber =expression[indexOfOperate+1];
       let result = operate(firstNumber,operatorSymbol,secondNumber);
           expression.splice(indexOfOperate-1,3,result);
    }
}

return result;
}

//adding event listeners for the keyboard click
document.addEventListener('keydown',(event)=>{
    if(!isNaN(event.key) && event.key !== ' '){
        document.getElementById(`${event.key}`).click();
    }

    if(['*','/','+','-','.'].includes(event.key)){
        document.getElementById(`${event.key}`).click();
    }
    
    if((event.key)=== 'Backspace'){
        document.getElementById('backspace').click();
    }

    if(event.key === 'c' || event.key ==='C'){
        document.getElementById('clear').click();
    }
    
    if(event.key === '=' || event.key === 'Enter'){
        document.getElementById('=').click();
    }
    
});
