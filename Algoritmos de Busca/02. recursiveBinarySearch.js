function recursiveBinarySearch(array, target, left = 0, rigth = array.length -1){
    if (left > rigth){
        return -1
    }

    let mid = Math.floor((left + rigth)/2)
    if (array[mid] === target){
        return mid
    } else if (array[mid] < target){
        return recursiveBinarySearch(array, target, mid + 1, rigth)
    } else{
        return recursiveBinarySearch(array, target, left, mid - 1)
    }
}