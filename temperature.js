let metric1 = prompt(`In which metric is the temperature you are converting?
C - Celsius
F - Fahreneit
K - Kelvin`);

let temp = Number(prompt("Please input the number you would like to convert"));

let metric2 = prompt(`To which metric would you like to convert the temperature?
C - Celsius
F - Fahreneit
K - Kelvin`);



if (isNaN(temp)) {
    console.log(`You did not enter a number`);      //Error message
}
else if (metric1 == "C") {
    if (metric2 == "F") {
        console.log(`${temp}°C is ${temp*(9/5)+32}F`);      //Converts Celsuis to Fahrenheit
    }
    else if (metric2 == "K") {
        console.log(`${temp}°C is ${temp+273.15}K`);        //Converts Celsuis to Kelvin
    }
    else if (metric2 == "C") {
        console.log(`${temp}°C is ${temp}°C, you entered the same metric twice!`);      //If user enters Celsuis twice
    }
    else {
        console.log(`You did not enter the correct metric`);        //Error message
    }
}
else if (metric1 == "F") {
    if (metric2 == "C") {
        console.log(`${temp}F is ${(temp-32)*(5/9)}°C`);      //Converts Fahrenheit to Celsuis
    }
    else if (metric2 == "K") {
        console.log(`${temp}F is ${(temp+459.67)*(5/9)}K`);      //Converts Fahrenhei to Kelvin
    }
    else if (metric2 == "F") {
        console.log(`${temp}F is ${temp}F, you entered the same metric twice!`);     //If user enters Fahrenehit twice
    }
    else {
        console.log(`You did not enter the correct metric`);        //Error message
    }
}
else if (metric1 == "K") {
    if (metric2 == "C") {
        console.log(`${temp}K is ${temp-273.15}°C`);        //Converts Kelvin to Celsuis
    }
    else if (metric2 == "F") {
        console.log(`${temp}K is ${temp*(9/5)-459.67}F`);       //Converts Kelvin to Fahenheit
    }
    else if (metric2 == "K") {
        console.log(`${temp}K is ${temp}K, you entered the same metric twice!`);        //If user enter Kelvin twice
    }
    else {
        console.log(`You did not enter the correct metric`);        //Error message
    }
}
else {
    console.log(`You did not enter the correct metric`)     //Error message
}