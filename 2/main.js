function f1()
{
    let number = parseFloat(prompt("Enter number: "));
    if(number > 0) alert(">0");
    else if(number == 0) alert("==0");
    else alert("<0");
}

function f2()
{
    let age = parseFloat(prompt("Enter age: "));
    if(age > 0 && age < 120) alert("Valid age.");
    else alert("Invalid age.");
}

function f3()
{
    let number = parseFloat(prompt("Enter number: "));
    alert(Math.abs(number));
}

function f4()
{
    let h = parseInt(prompt("Enter hours: "));
    let m = parseInt(prompt("Enter minutes: "));
    let s = parseInt(prompt("Enter seconds: "));
    if(h > 23) {
        alert("Invalid hours value.");
        return;
    }
    if(m > 59) {
        alert("Invalid minutes value.");
        return;
    }
    if(s > 59) {
        alert("Invalid seconds value.");
        return;
    }

    alert("Input data was correct.");
}

function f5()
{
    let x = parseFloat(prompt("Enter x: "));
    let y = parseFloat(prompt("Enter y: "));
    if(x>0 && y >0) alert("1");
    else if(x<0 && y > 0) alert("2");
    else if(x <0 && y < 0) alert("3");
    else alert("4");
}

function f6()
{
    let months = {
        1 : "January",
        2 : "February",
        3 : "March",
        4 : "April",
        5 : "May",
        6 : "June",
        7 : "July",
        8 : "August",
        9 : "September",
        10 : "October",
        11 : "November",
        12 : "December"
    }
    let number = parseFloat(prompt("Enter number of month: "));
    alert(months[number]); // так краще, ніж switch
}

function f7()
{
    let n1 = parseFloat(prompt("First number: "));
    let n2 = parseFloat(prompt("Second number: "));
    let operation = prompt("Operation: (+,/,*,-)");
    let result;
    switch(operation)
    {
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1-n2;
            break;
        case "*":
            result = n1*n2;
            break;
        case "/":
            result = n1/n2;
            break;
        default:
            result = "Invalid operation";
            break;
    }
    alert("Result = " + result);
}

function f8()
{
    let n1 = parseFloat(prompt("Enter 1: "));
    let n2 = parseFloat(prompt("Enter 2: "));
    let bigger = n1 > n2 ? n1 : n2;
    alert(bigger);
}

function f9()
{
    let n1 = parseFloat(prompt("Enter 1: "));
    n1 % 5 == 0 ? alert("Divisible by 5") : alert("Non-Divisible by 5");
}

function f10()
{
    let nameOfPlanet = prompt("Enter the name of the planet: ");
    nameOfPlanet.toLowerCase() == "earth" ? alert("Hey, human!") : alert("Hey, alien!");
}