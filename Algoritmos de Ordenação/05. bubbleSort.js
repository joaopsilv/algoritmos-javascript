function bubbleSort(array){
    const length = array.length
    for (let i = 0; i < length -1; i++){
        let hasTrade = false
        for (let j = 0; j < length -1; j++){
            if (array[j] > array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]]
                hasTrade = true
            }
        }
        if (!hasTrade){
            break
        }
    }
    return array
}