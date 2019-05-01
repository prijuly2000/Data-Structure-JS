console.log(`
Binary Search
data=[1,2,3,4,5,6,7,8,9];
target=5
Search if target is present in data array .
`);
const binarySearch = (data=[1,2,3,4,5,6,7,8,9], target=3) => {
    let left = 0;
    let right = data.length-1;
    let mid;
    while(left <= right) {
        mid = (left+Math.floor((right-left)/2));
        // console.log("data", left, " ", right);
        if(data[mid] === target) {
            return mid;
        } else if(data[mid] < target) {
            left = mid + 1;
        } else {
            right = mid -1;
        }
    }
    return -1;
};

export default binarySearch;
console.log("Found at ", binarySearch());