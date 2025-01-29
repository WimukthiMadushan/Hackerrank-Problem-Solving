function birthdayCakeCandles(candles) {
    let sortedCandels = candles.sort((a,b) => b-a)
    let numberOfTalestCandle = 1;
    for(let i = 1; i < sortedCandels.length; i++){
        if(sortedCandels[i] === sortedCandels[0]){
            numberOfTalestCandle++;
        }
        else{
            break;
        }
    }
    return(numberOfTalestCandle)
}