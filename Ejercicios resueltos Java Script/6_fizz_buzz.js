// Fizz buzz
const fizzBuzz = function (numero = new Number){
    resultado = numero % 3
    if (numero % 3 ===0 && numero % 5 ===0){
        return "fizzbuzz";
    }
    else if (numero % 5 ===0){
        return "buzz";
    }
    else if (numero % 3 === 0){
        return "fizz";
    }
    else{
        return numero;
    }
}
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8