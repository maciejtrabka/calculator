function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {

    return operator(a, b)
}

//Problem: jak stworzyć nową operację jeśli po wykonaniu działania "=", damy nową liczbę. 
//Nie chcemy żeby dodała się wtedy nowa litera do stringu-wyniku, tylko żeby ją zastąpiła





var newNumber = false; //przy operatorach zmienia się na true i sprawi, że szykują zmienną "a", zamiast "b"
var displayDelete = false; // przy operatorach zmienia się na true i sprawi, że nowa liczba potem będzie wyświetlana
var secondOperator = false; //przy operatorach zmienia sie na true i sprawia, że jak damy nowy operator to wtedy będzie też robił to co równa się
//var newOperation = false; //zmienia się po równa się na true i jeeśli jest true to kolejna liczba od nowa policzy i pozwoli na zrobić nowe równanie, ale
//sprawia też, że zeruje nam liczbę w przypadku gdybyśmy chcieli dać + a nie kolejną liczbę
var a = ""; //tu się string liczby "a" tworzy do operacji
var b = ""; //tu się string liczby "b" tworzy do operacji
let display = document.querySelector('#display'); //wyświetlacz
display.textContent = "";

// =
const btnScore = document.querySelector('#buttonScore');
btnScore.addEventListener('click', () => {
    a = Number(a);
    b = Number(b);
    display.textContent = operate(operator, a, b);
    a = operate(operator, a, b);
    b = "";
    //newOperation = true;

});
//+
const btnPlus = document.querySelector('#buttonPlus');
btnPlus.addEventListener('click', () => {
    operateAgain()
    displayDelete = true;
    operator = add;
    newNumber = true;
    secondOperator = true;
});
//-
const btnMinus = document.querySelector('#buttonMinus');
btnMinus.addEventListener('click', () => {
    operateAgain()
    displayDelete = true;
    operator = subtract;
    newNumber = true;
});
// /
const btnDivide = document.querySelector('#buttonDivide');
buttonDivide.addEventListener('click', () => {
    operateAgain()
    displayDelete = true;
    operator = divide;
    newNumber = true;
});
//*
const btnMultiply = document.querySelector('#buttonMultiply');
buttonMultiply.addEventListener('click', () => {
    operateAgain()
    displayDelete = true;
    operator = multiply;
    newNumber = true;
});

function operateAgain() {
    if (secondOperator === true) {
        a = Number(a);
        b = Number(b);
        display.textContent = operate(operator, a, b);
        a = operate(operator, a, b);
        b = "";
    };
}

function addNumber(x) {
    if (newNumber === true) { b += x } else { a += x };
    if (displayDelete === true) {
        display.textContent = x;
        displayDelete = false;
    } else { display.textContent += x; };
}
//1
const btn1 = document.querySelector('#button1');
btn1.addEventListener('click', () => {
    var x = 1;
    addNumber(x);
});

//2
const btn2 = document.querySelector('#button2');
btn2.addEventListener('click', () => {
    var x = 2;
    addNumber(x);
});
//3
const btn3 = document.querySelector('#button3');
btn3.addEventListener('click', () => {
    var x = 3;
    addNumber(x);
});
//4
const btn4 = document.querySelector('#button4');
btn4.addEventListener('click', () => {
    var x = 4;
    addNumber(x);
});
//5
const btn5 = document.querySelector('#button5');
btn5.addEventListener('click', () => {
    var x = 5;
    addNumber(x);
});
//6
const btn6 = document.querySelector('#button6');
btn6.addEventListener('click', () => {
    var x = 6;
    addNumber(x);
});
//7
const btn7 = document.querySelector('#button7');
btn7.addEventListener('click', () => {
    var x = 7;
    addNumber(x);
});
//8
const btn8 = document.querySelector('#button8');
btn8.addEventListener('click', () => {
    var x = 8;
    addNumber(x);
});
//9
const btn9 = document.querySelector('#button9');
btn9.addEventListener('click', () => {
    var x = 9;
    addNumber(x);
});
//0
const btn0 = document.querySelector('#button0');
btn0.addEventListener('click', () => {
    var x = 0;
    addNumber(x);
});
//C
const btnC = document.querySelector('#buttonC');
btnC.addEventListener('click', () => {
    display.textContent = "";
    newNumber = false;
    displayDelete = false;
    secondOperator = false;
    a = "";
    b = "";
    operator = ""
});


/*if (newOperation === true) {
    a = ""; //dzięki temu nie dodaje się do str tylko tworzy liczbę od zera 
    display.textContent = "";
    newOperation = false;
};
    
jeszcze na starcie dawałem i przy "C"*/