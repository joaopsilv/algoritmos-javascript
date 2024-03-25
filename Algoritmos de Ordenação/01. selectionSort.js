function selectionSort(array){
    const length = array.length
    for (let i = 0; i < length -1; i++){
        let lowElementIndex = i
        for (let j = i + 1; j < length; j++){
            if (array[j] < array[lowElementIndex]){
                lowElementIndex = j;
            }
        }
        if (lowElementIndex !== i){
            [array[i], array[lowElementIndex]] = [array[lowElementIndex], array[i]]
        }
    }
    return array
}