function fourOperations(type){
    switch (type){
        case "+":
            answer = Number(number1.value) + Number(number2.value);
            break;
        case "-":
            answer =  Number(number1.value) - Number(number2.value);
            break;
        case "*":
            answer =  Number(number1.value) * Number(number2.value);
            break;
        case "/":
            answer =  Number(number1.value) / Number(number2.value);
            break;
        case "%":
            answer =  Number(number1.value) % Number(number2.value);
            break;
        default:
            break
    }
    alert(answer);
}

var number1 = document.getElementById("input1");
var number2 = document.getElementById("input2");
var answer = 0;





