function binarySearch(array, target){
    let rigth = array.length -1
    let left = 0

    while (left <= rigth){
        let mid = Math.floor((left + rigth)/2)
        if (array[mid] === target){
            return mid
        } else if (array[mid] < target){
            left = mid +1
        } else{
            rigth = mid -1
        }
    }
    return -1
}