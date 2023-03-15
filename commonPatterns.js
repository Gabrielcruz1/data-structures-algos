////////////   FREQUENCY COUNTERS -- COMMON PATTERNS   /////////////////

// Hopefully you can see how it is a helpful pattern in this scenario.
// Any time you have multiple pieces of data and you need to compare them in particular, if you need to
// see if they consist of the same individual pieces, whether it's anagrams or you're trying to see if
// they're if one array is equal to another array squared, each individual piece or what else have I seen?
// If you need to tell if numbers consist of the same digits just in a different order.
// There's a lot of applications for this.


//A function called same which accepts to arrays and the function should return true if every value in the array has its corresponding values squared in the second array.
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    //loop over values in array - 
    for (let val of arr1) {
        // add 1 to frequency counter , or add 1 if its not there already. 
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true
}
// console.log(same([1,2,3,2],[9,1,4,4]))




//Given two strings write a function to determine if the second string is an anagram of the first.
function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set tp 1 
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // cant find the letter or letter is zero then its not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
};
// console.log(validAnagram("anagram", "nagaram"))



////////////   MULTIPLE POINTERS  -- COMMON PATTERNS   /////////////////

//Write a function called sumZero which accepts a sorted array of intergers. The fucntion should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist. 
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
// console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]))


//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
function countUniqueValues(arr) {
    //start at beggining of arr
    let i = 0;
    //loop through array starting at index 1 
    for (let j = 1; j < arr.length; j++) {
        //comparing i and j
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
// console.log(countUniqueValues([1,1,2,3,3,4,5,6,6,7]))


////////////   SLIDING WINDOWS  -- COMMON PATTERNS   /////////////////

//Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximun sum of n consecutive elements in the array. 
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}
// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3))

////////////   DIVIDE AND CONQUER  -- COMMON PATTERNS   /////////////////

//Given a sorted array of integers , write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1. 
function search(array, val) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2)
        let currentElement = array[middle];
    }
    if (array[middle] < val) {
        min = middle + 1;
    }
    else if (array[middle] > val) {
        max = middle - 1;
    }
    else {
        return middle;
    }
    return -1
}