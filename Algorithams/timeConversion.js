function timeConversion(s) {
    let period = s.slice(-2);
    let hours = parseInt(s.slice(0, 2)); 
    let minutesAndSeconds = s.slice(2, 8);
    if(period === 'AM' && hours === 12){
        hours = 0;
    } 
    else if (period === "PM" && hours !== 12) {
        hours += 12;
    }
    return (hours < 10 ? "0" : "") + hours + minutesAndSeconds;    
}