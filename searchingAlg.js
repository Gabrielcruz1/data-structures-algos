// LINEAR SEARCH ALGORITHM 
// what is the index of a given val in an array.
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}
// console.log(linearSearch([34,56,1,2], 1))

// BINARY SEARCH 
// ONLY WORKS ON SORTED ARRAYS - divide and conquer 

// write a function accepts a sorted array and a value
// create a left pointer at the start of array, and a right pointer at teh end of the array
// while the left pointer comes before the right pointer 
// create a pointer in the middle 
// if you fine the valueyou want return the index 
// if the value is too small, move left pointer up 
// if the value is too large, move the right pointer down 
// if you never find th value return -1 
function binarySearch(arr, elem) {
    let start = 0
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === elem) {
        return middle;
    };
    return -1
}
// console.log(binarySearch([2,5,6,9,13,15,28,30], 50))

// NAIVE STRING SEARCH 
function naiveSearch(long, short){
    count = 0;
    for(let i = 0; i < long.length; i++){
        // J HAS TO INCREASE 3 TIMES IN ORDER FOR I TO INCREASE 1 TIME 
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if(j === short.length -1) count++
        }
    }
    return count
}
// loop through every character in first steing 
// then onn sec strin gdo same 
// imm check if 
console.log(naiveSearch("lorie loled", "lo"))

