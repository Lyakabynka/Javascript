function f1()
{
    let a = parseInt(prompt("Input number: "))
    alert(Math.pow(a,2))
}

function f2()
{
    let a = parseInt(prompt("Input number1: "))
    let b = parseInt(prompt("Input number2: "))
    alert((a+b)/2)
}

function f3()
{
    let a = parseInt(prompt("Input length: "))
    alert(a*4)
}

function f4()
{
    let kmmile = 0.621371
    let a = parseInt(prompt("Input kms: "))
    alert(a*kmmile)
}

function f5()
{
    let a = parseInt(prompt("Input first number: "))
    let b = parseInt(prompt("Input second number: "))
    alert("plus " + (a + b) + "\nsub " + (a-b) + "\nmulti " + (a*b) + "\ndiv " + (a/b))
}

function f6()
{
    let a = parseInt(prompt("Input first number: "))
    let b = parseInt(prompt("Input second number: "))
    let x = -b/a;

    alert(x)
}

function f7()
{
    let a = parseInt(prompt("Input current hour: "))
    let b = parseInt(prompt("Input current minute: "))
    let ah = 23-a;
    let bm = 60-b;

    alert("hours,minutes till next day: " + ah+":"+bm)
}

function f8()
{
    let a = parseInt(prompt("Input three digit number: "))
    let second_digit = parseInt(a/10)%10;

    alert(second_digit)
}

function f9()
{
    let last_digit;
    let a = parseInt(prompt("Input any digit number: "))
    let first_digit = a%10
    while(a!=0)
    {
        last_digit = a
        a = parseInt(a / 10)
    }

    alert("first: " + first_digit + "\nlast: " + last_digit)
}

function f10()
{
    let a = parseInt(prompt("Final revenue: "))
    let salary = 250 + 0.1*a

    alert("revenue: " + salary)
}