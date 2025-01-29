function miniMaxSum(arr) {
    let sortedArray = arr.sort((a, b) => a-b);
    let minSum = 0;
    let maxSum = 0;
    for(let i = 0; i < sortedArray.length - 1; i++) {
        minSum += sortedArray[i];
    }
    for(let i = 1; i < sortedArray.length; i++) {
        maxSum += sortedArray[i];
    }
    console.log(minSum, maxSum)
}