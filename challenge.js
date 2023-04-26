function fizzBuzz(num){
    let result = [];
    if(num % 3 === 0 && num % 5 === 0){
        result.push("FizzBuzz");
    } else if(num % 3 === 0){
        result.push("Fizz");
    } else if(num % 5 === 0){
        result.push("Buzz");
    } else {
        console.log("nothing")
    }
    return result; 
};

let test = fizzBuzz(10)
console.log(test)

// const fizzBuzz = () => {
//     console.log("hello")
// }