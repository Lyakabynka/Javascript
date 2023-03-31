
function f1()
{
    let name = prompt("Enter your name: ");
    alert("What's up, " + name);
}

function f2()
{
    let byear = parseInt(prompt("Enter your birth year: "));
    alert("Your age is " + (2023-byear));
}

function f3()
{
    let lenghtside = parseFloat(prompt("Enter length of the square's side: "));
    alert("Perimeter equals to " + 4*lenghtside);
}

function f4()
{
    let r = parseFloat(prompt("Enter radius of the circle: "));
    alert("Perimeter equals to " + 3.14*Math.pow(r,2));
}

function f5()
{
    let distance = parseFloat(prompt("Distance between A and B: "));
    let hours = parseFloat(prompt("How long do you want it to take to get from A to B? (hours)"));
    alert("Perimeter equals to " + distance/hours);
}

function f6()
{
    const eurToUsd = 1.07;
    let dollars = parseFloat(prompt("Dollars: "));
    alert("Euros: " + dollars/eurToUsd);
}

function f7()
{
    let Gb = parseInt(prompt("How many gb does your flash drive have? "));
    let numberOfFiles = parseInt(Gb*1024 / 820)
    alert("Number of files your flash may contain (each is 820Mb): " + numberOfFiles);
}

function f8()
{
    let money = parseFloat(prompt("Amount of money in wallet: "));
    let price = praseFloat(prompt("Price of one chocolate bar: "));
    alert("Number of chocolate bars you can buy: " + money/price);
}

function f9()
{
    let n = parseInt(prompt("Enter three-digit number: "));
    let temp = "";
    
    while(n!=0)
    {
        temp = temp + (n%10);
        n = parseInt(n / 10);
    }
    alert("Polyndrom of your number: " + temp);
}

function f10()
{
    let integer = parseInt(prompt("Enter integer: "));
    let response = integer&1 ? "Integer is odd" : "Integer is even";
    alert(response);
}