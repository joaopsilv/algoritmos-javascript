function quickSort(array){
    console.log(array)
    if (array.length <= 1){
        return array
    }

    const pivot = array[Math.floor(array.length/2)]
    const leftHalf = []
    const rightHalf = []

    for (let i = 0; i < array.length; i++){
        if (i === Math.floor(array.length/2)){
            continue
        }
        if (array[i] < pivot){
            leftHalf.push(array[i])
        } else{
            rightHalf.push(array[i])
        }
    }
    return [...quickSort(leftHalf), pivot, ...quickSort(rightHalf)]
}