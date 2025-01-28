function compareTriplets(a, b) {
    let comparisonPoits = [0,0]
    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            comparisonPoits[0] += 1
        }
        else if(a[i] < b[i]){
            comparisonPoits[1] += 1
        }
    }
    return comparisonPoits;
}