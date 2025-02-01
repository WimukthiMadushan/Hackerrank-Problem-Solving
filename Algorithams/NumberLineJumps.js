function kangaroo(x1, v1, x2, v2) {
    let n = (x1-x2)/(v2-v1);
    if(((x1 > x2) && (v1 > v2)) || ((x1 < x2) && (v1 < v2))){
        return "NO"
    }
    else{
        if(n >= 0 && Number.isInteger(n)){
            return "YES"
        }
        else{
            return "NO"
        }
    }
}