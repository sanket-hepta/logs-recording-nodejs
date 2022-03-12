exports.add = (num1, num2) => {
    return parseInt(num1) + parseInt(num2); 
}

exports.subtract = (num1, num2) => {
    return parseInt(num1) - parseInt(num2); 
}

exports.multiply = (num1, num2) => {
    return parseInt(num1) * parseInt(num2); 
}

exports.divide = (num1, num2) => {
    if(num2 == 0){
        throw new NotDivideByZero("Can not divide by zero");
    }
    return parseInt(num1) / parseInt(num2); 
}


class NotDivideByZero extends Error{
    constructor(message){
        super(message);
    }
}