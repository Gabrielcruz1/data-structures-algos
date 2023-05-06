function fizzBuzz(num) {
    let result = [];
    if (num % 3 === 0 && num % 5 === 0) {
        result.push("FizzBuzz");
    } else if (num % 3 === 0) {
        result.push("Fizz");
    } else if (num % 5 === 0) {
        result.push("Buzz");
    } else {
        console.log("nothing")
    }
    return result;
};

// let test = fizzBuzz(10)
// console.log(test)

const hardFizzBuzz = (num) => {
    let result = [];
    for (let i = 0; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz")
        } else {
            result.push(i.toString());
        }
    }
    return result
};

// let testTwo = hardFizzBuzz(25)
// console.log(testTwo)

const reverseStringFunction = (str) => {
    let result = str.split(' ').reverse().join(" ")
    // console.log(result)
}

let testThree = reverseStringFunction("the sky is blue")
// console.log(testThree)
