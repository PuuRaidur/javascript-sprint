function printPrettyDate(date) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let day = 0;
    if(date.getDay() === 1) {
        day = days[0];
    }
    else if(date.getDay() === 2) {
        day = days[1];
    }
    else if(date.getDay() === 3) {
        day = days[2];
    }
    else if(date.getDay() === 4) {
        day = days[3];
    }
    else if(date.getDay() === 5) {
        day = days[4];
    }
    else if(date.getDay() === 6) {
        day = days[5];
    }
    else if(date.getDay() === 7) {
        day = days[6];
    }
    let hour = 0;
    let zone = ''
    if(date.getHours() < 12) {
        hour = date.getHours();
        zone = 'AM';
    }
    else {
        hour = date.getHours() - 12;
        zone = 'PM';
    }
    return "Today is " +
        day + ", " +
        date.getMonth() + " " +
        date.getDate() + ", " +
        date.getFullYear() +
        " and the time is " +
        hour + ":" +
        date.getMinutes() + ":" +
        date.getSeconds() + " " +
        zone + ".";
}
console.log(printPrettyDate(new Date()));