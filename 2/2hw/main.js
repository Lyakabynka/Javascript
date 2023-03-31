function f1()
{
    let age = parseInt(prompt("Enter your age: "));
    if(age < 12)
        alert("Child");
    else if(age < 18)
        alert("Teenager");
    else if(age < 60)
        alert("Adult");
    else
        alert("Retiree");
}

function f2()
{
    let numberChar = prompt("Number from 0 to 9: ");
    if(!(parseInt(numberChar) >= 0 && parseInt(numberChar) <= 9))
        alert("Invalid number");

    numberChar = String.fromCharCode(numberChar.charCodeAt() - 16);
    
    alert("Special char on this position: " + numberChar);
}

function f3()
{
    let number = parseInt(prompt("Number with 3 digits: "));
    
    let arr = new Array();

    while(number != 0)
    {
        if(arr.includes(number%10))
        {
            alert("Contains two or more digits {" + number%10 + "}")
        }
        else
            arr.push(number%10);
        number = parseInt(number / 10);
    }
}

function IsIntercalary(year)
{
    return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
}
function f4()
{
    let year = parseInt(prompt("Year to check its uniqueness: "));

    if(IsIntercalary(year))
    {
        alert("Unique");
    }
    else
    {
        alert("Non-unique");
    }
}

function f5()
{
    let number = parseInt(prompt("Enter 5-digit number"));

    let n = number;
    let Polyndrom = "";
    
    while(n != 0)
    {
        Polyndrom = Polyndrom + (n%10);
        n = parseInt(n / 10);
    }

    Polyndrom = parseInt(Polyndrom);

    if(Polyndrom == number)
    {
        alert("Polyndrom!")
    }
    else
    {
        alert("Not a polyndrom.")
    }
}

function f6()
{
    let money = parseFloat(prompt("Enter the amount of usd: "));

    let convertTo = prompt("Enter currency to convert to: ");

    let usdToCurrency = {
        "EUR" : 1.08,
        "UAH" : 37,
        "AZN" : 10
    }

    alert(money*usdToCurrency[convertTo]);
}

function f7()
{
    let sum = parseFloat(prompt("Enter purschase amount: "));
    let discount = 0;
    if(sum >= 200 && sum < 300)
        discount = 3;
    else if(sum <= 500)
        discount = 5;
    else if(sum > 500)
        discount = 7;
}

function f8()
{
    let lengthOfCircle = parseFloat(prompt("Enter the length of the circle: "));
    let perimeterOfSquare = parseFloat(prompt("Enter the perimeter of the square: "));

    let diametr = parseFloat(lengthOfCircle / 3.14);
    let sideLength = praseFloat(perimeterOfSquare / 4);
    if(diametr > sideLength)
        alert("Circle can not fit into the square.");
    else
        alert("Circle can fit into the square.")
}

function f9()
{
    let score = 0;

    let answer = parseFloat(prompt("PI = ? \n3.14, 3.94, 3.95"));
    if(answer == 3.14) score+=2;

    answer = parseFloat(prompt("5*2 = ?\n11,12,10"));
    if(answer == 10) score+=2;

    answer = parseFloat(prompt("5*3 = ?\n14,15,16"));
    if(answer == 15) score+=2;

    alert(`Your score is: ${score}`)
}

function f10() {

    var inputDate = prompt("Enter date: dd.mm.yyyy ");
  
    var dateArray = inputDate.split(".");
    var day = parseInt(dateArray[0]);
    var month = parseInt(dateArray[1]) - 1; // Місяці починаються з 0
    var year = parseInt(dateArray[2]);
    var currentDate = new Date(year, month, day);
    
    var nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1); // Додати один день
  
    alert(nextDate.toDateString());
  }