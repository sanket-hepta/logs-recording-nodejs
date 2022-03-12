const calculator = require('./calculator');
const readline = require('readline-sync');
const fs = require('fs');
const {Console}= require ("console");
const myLogger= new Console({
    stdout: fs.createWriteStream("logs.txt",{'flags':'a'}),
    stderr:fs.createWriteStream("logs.txt",{'flags':'a'})
})
console.log("----------------Actions---------------");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiply");
console.log("4. Divide");
 
let option = readline.question("Select action to perform calculation: ");
if(option == 1){
 
    let log_data = '';
 
    console.log("-----------Addition-----------");
    let num1 = readline.question('Enter first number: ');
    let num2 = readline.question('Enter second number: ');
 
    log_data += `Step 1. Accept 2 numbers ${num1} and ${num2}\n`;
    log_data += `Step 2. Calling Add Method\n`;
 
    let result = calculator.add(num1, num2);
    console.log(`Addition is ${result}`);
 
    log_data += `Step 3. Addition is ${result}\n\n`;
    //fs.appendFileSync('logs.txt', log_data);
    myLogger.log(log_data);
 
}else if(option == 2){
 
    let log_data = '';
 
    console.log("-----------Subtraction-----------");
    let num1 = readline.question('Enter first number: ');
    let num2 = readline.question('Enter second number: ');
 
    log_data += `Step 1. Accept 2 numbers ${num1} and ${num2}\n`;
    log_data += `Step 2. Calling Subtract Method\n`;
 
    let result = calculator.subtract(num1, num2);
    console.log(`Subtraction is ${result}`);
 
    log_data += `Step 3. Subtraction is ${result}\n\n`;
    //fs.appendFileSync('logs.txt', log_data);
    myLogger.log(log_data);
 
}else if(option == 3){
 
    let log_data = '';
 
    console.log("-----------Multiplication-----------");
    let num1 = readline.question('Enter first number: ');
    let num2 = readline.question('Enter second number: ');
 
    log_data += `Step 1. Accept 2 numbers ${num1} and ${num2}\n`;
    log_data += `Step 2. Calling multiply Method\n`;
 
    let result = calculator.multiply(num1, num2);
    console.log(`Multiplication is ${result}`);
 
    log_data += `Step 3. Multiplication is ${result}\n\n`;
    //fs.appendFileSync('logs.txt', log_data);
    myLogger.log(log_data);
 
}else if(option == 4){
 
    let log_data = '';
 
    console.log("-----------Division-----------");
    let num1 = readline.question('Enter first number: ');
    let num2 = readline.question('Enter second number: ');
 
    log_data += `Step 1. Accept 2 numbers ${num1} and ${num2}\n`;
   
    try{
        log_data += `Step 2. Calling divide Method\n`;
        let result = calculator.divide(num1, num2);
        console.log(`Division is ${result}`);
 
        log_data += `Step 3. Division is ${result}\n\n`;
        //fs.appendFileSync('logs.txt', log_data);
        myLogger.log(log_data);
 
    }catch(error){
        console.log(`${error}`);
        log_data += `Step 3. ${error}\n\n`;
        //fs.appendFileSync('logs.txt', log_data);
        myLogger.error(log_data);
    }
}else{
    console.log("Invalid action provided by user");
}
