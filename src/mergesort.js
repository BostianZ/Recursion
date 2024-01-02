function mergesort(arr) {
    ///EX [2,1,6,3,5,4,8,7]
    //[2,1,6,3] [5,4,8,7]
    //[2,1] [6,3] [5,4] [8,7]
    //sort the left half of the array (assuming n > 1)
    //sort the right half of the array (assuming n > 1)
    //merge the two halves together
    let left = arr.slice(0, arr.length/2);
    let right = arr.slice(arr.length/2);

    //Base case:
    //If one element exists it's already sorted
    if (arr.length === 1) {
        return arr;
    } 

    
    
}

export { mergesort }