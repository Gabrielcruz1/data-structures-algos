//BUBBLE SORT 
function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr){
    for(var i = arr.length; i > 0; i--){
      for(var j = 0; j < i - 1; j++){
        console.log(arr, arr[j], arr[j+1]);
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;         
        }
      }
    }
    return arr;
  }

// ES2015 Version
  function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
    return arr;
  }

//   bubbleSort([8,1,2,3,4,5,6,7]);

// Optimized BubbleSort with noSwaps
function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]))