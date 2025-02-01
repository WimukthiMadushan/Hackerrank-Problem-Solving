function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesInsideSamsHouse = 0;
    let orangesInsideSamsHouse = 0;
    for(let apple = 0; apple < apples.length; apple++){
        if(s <= (a + apples[apple]) && (a + apples[apple]) <= t){
            applesInsideSamsHouse++;
        }
    }
    for(let orange = 0; orange < oranges.length; orange++){
        if(s <=(b+oranges[orange]) && (b+oranges[orange]) <= t){
            orangesInsideSamsHouse++;
        }
    }
    console.log(applesInsideSamsHouse);
    console.log(orangesInsideSamsHouse);
}
