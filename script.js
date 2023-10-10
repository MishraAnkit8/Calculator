
// displaying window
var res=document.getElementById('result');

// cllear button 

var clr=document.getElementById('clear-button');
clr.addEventListener('click',function(){
    res.value=''
});
var enterBtn=document.getElementById('enterBtn');
var currentNum=0;
var currentOp='';




//button related to calculator

var button1=document.getElementById('button1');
var button2=document.getElementById('button2');
var button3=document.getElementById('button3');
var button4=document.getElementById('button4');
var button5=document.getElementById('button5');
var button6=document.getElementById('button6');
var buttonSub=document.getElementById('buttonSub');
var button7=document.getElementById('button7');
var button8=document.getElementById('button8');
var button9=document.getElementById('button9');
var buttonZero=document.getElementById('buttonZero');
var buttonDot=document.getElementById('buttonDot');

//enter button



//operator 
let operator=document.querySelector('.operator');
var buttonEqual=document.getElementById('buttonEqual');
var buttonMul=document.getElementById('buttonMul');
var buttonDiv=document.getElementById('buttonDiv');
var buttonPlus=document.getElementById('buttonPlus');

// displaying enetered button by using event listner

button1.addEventListener('click',function(){
    valfun(1);
});
button2.addEventListener('click',function(){
    valfun(2);
});

button3.addEventListener('click',function(){
    valfun(3);
});
button4.addEventListener('click',function(){
    valfun(4);
});
button5.addEventListener('click',function(){
    valfun(5);
});

button6.addEventListener('click',function(){
    valfun(6);
});
button7.addEventListener('click',function(){
    valfun(7);
});
button8.addEventListener('click',function(){
    valfun(8);
});

button9.addEventListener('click',function(){
    valfun(9);
});

buttonZero.addEventListener('click',function(){
    valfun(0);
});
buttonDot.addEventListener('click',function(){
    valfun('.');
});

buttonSub.addEventListener('click',function(){
    valfun('-');
});

buttonPlus.addEventListener('click',function(){
    valfun('+');
});
buttonMul.addEventListener('click',function(){
    valfun('*');
});

buttonDiv.addEventListener('click',function(){
    valfun('/');
});


// this function is used for diplaying entered button on displayting screen

function valfun(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        if (currentNum !== '') {
            // If a number is already entered, store it and the operator
            if (currentOp !== '') {
                calculateResult(); // Calculate the result if there's a pending operator
            }
            currentOp = value;
            console.log(currentOp)
            res.value += value;
        }
    } else {
        currentNum = value;
        console.log(currentNum);
        res.value += value;
    }
}

function calculateResult() {
    var number1 = parseFloat(res.value);
    console.log(`the number 1 is${number1}`)
    var number2 = parseFloat(currentNum);
    console.log(`the number 2 is${number2}`)
    var result;
    if (currentNum !== '' && currentOp !== '') {
      

        switch (currentOp) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                if (number2 === 0) {
                    res.value = 'Error';
                    return;
                }
                result = number1 / number2;
                break;
            default:
                break;
        }

        res.value = result;
        console.log(res.value)
        currentNum = result;
        console.log(`current number is ${currentNum}`);
        currentOp = '';
    }
}

enterBtn.addEventListener('click', calculateResult);



 

 



