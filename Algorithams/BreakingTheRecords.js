function breakingRecords(scores) {
    let highest = scores[0];
    let lowest = scores[0];
    
    let numberOfHieghst = 0;
    let numberOfLowest = 0;
    
    for(let i = 0; i < scores.length; i++){
        if(highest < scores[i]){
            highest = scores[i];
            numberOfHieghst++
        }
        else if(lowest > scores[i] ){
            lowest = scores[i]
            numberOfLowest++
        }
    }
    return [numberOfHieghst, numberOfLowest];
}