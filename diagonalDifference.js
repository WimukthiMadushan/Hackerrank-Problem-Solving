function diagonalDifference(arr) {
    let primaryDiogonal = 0;
    let secondaryDiogonal = 0;
    for(let i = 0; i < arr.length; i++){
        primaryDiogonal += arr[i][i];
        secondaryDiogonal += arr[i][arr.length-1-i] 
    }
    return Math.abs(primaryDiogonal - secondaryDiogonal)
}