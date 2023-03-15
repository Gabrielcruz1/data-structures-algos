function countDown(num){
    if(num <= 0){
        console.log("All done!");
        //not returning anything but this is important because if we dont have this it will not stop. 
        return;
    }
    console.log(num)
    num--;
    countDown(num);
}
// console.log(countDown(5))


function sumRange(num){
    //base case, if num is 1 just return 1 
    if(num === 1) return 1;
    //recursive call below
    return num + sumRange(num-1);
}
//GETTING THE FACTORIAL OF A NUMBER RECURSIVELY 
function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}
// console.log(factorial(5))

//HELPER METHOD RECURSION   
function collectOddValues(arr){
    let results = [];

    function helper(helperInput){
        //base case 
        if(helperInput.length === 0 ){
            return;
        }
        //otherwise 
        if(helperInput[0] % 2 !== 0){
            //if odd push into result
            results.push(helperInput[0])
        }

        helper(helperInput.slice[1])
    }

    helper(arr)

    return results;
}
// console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))

//PURE RECURSION - NO HELPER METHOD 
function collectOddValues(arr){
    let newArr = [];
    if(arr.length === 0 ){
        return newArr;
    }
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))