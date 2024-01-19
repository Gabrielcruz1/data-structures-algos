
const containerWithMostWater = (height) => {


    let [left , right, max] = [0, height.length -1, 0]


    while (left < right){
        //
        let containerWidth = right - left;
        let containerHeight = 0;
        let area = 0;

        if (height[left] < height[right]){
            containerHeight = height[left];
            left++
        } else {
            containerHeight = height[right];
            right--;
        }

        area = containerHeight * containerWidth;

        if(area > max){
            max = area;
        }
    }
    return max 

}

const test1 = [3, 6, 8, 9, 4, 10, 12, 7, 33, 11, 1, 5];
console.log(containerWithMostWater(test1));