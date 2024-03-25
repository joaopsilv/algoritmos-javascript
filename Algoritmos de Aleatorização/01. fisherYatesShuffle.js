function fisherYatesShuffle(array){
    let currentIndex = array.length, randomIndex
    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        [array[currentIndex], array[randomIndex]] = 
            [array[randomIndex], array[currentIndex]]
    }
    return array
}

function fisherYatesShuffle(array){
    for (let i = array.length; i; i--){
        let randomIndex = Math.floor(Math.random() * i);
        [array[i-1], array[randomIndex]] = [array[randomIndex], array[i-1]];
    }
    return array
}