function printPrettyDate(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = "";
    if(date.getDay() === 0) {
        day = days[0];
    }
    else if(date.getDay() === 1) {
        day = days[1];
    }
    else if(date.getDay() === 2) {
        day = days[2];
    }
    else if(date.getDay() === 3) {
        day = days[3];
    }
    else if(date.getDay() === 4) {
        day = days[4];
    }
    else if(date.getDay() === 5) {
        day = days[5];
    }
    else if(date.getDay() === 6) {
        day = days[6];
    }
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = "";
    if(date.getMonth() === 0) {
        month = months[0];
    }
    else if(date.getMonth() === 1) {
        month = months[1];
    }
    else if(date.getMonth() === 2) {
        month = months[2];
    }
    else if(date.getMonth() === 3) {
        month = months[3];
    }
    else if(date.getMonth() === 4) {
        month = months[4];
    }
    else if(date.getMonth() === 5) {
        month = months[5];
    }
    else if(date.getMonth() === 6) {
        month = months[6];
    }
    else if(date.getMonth() === 7) {
        month = months[7];
    }
    else if(date.getMonth() === 8) {
        month = months[8];
    }
    else if(date.getMonth() === 9) {
        month = months[9];
    }
    else if(date.getMonth() === 10) {
        month = months[10];
    }
    else if(date.getMonth() === 11) {
        month = months[11];
    }
    const hour24 = date.getHours();
    const zone = hour24 < 12 ? 'AM' : 'PM';
    let hours = "";
    if(hour24 > 12) {
        hours = hour24 - 12;
    }
    else if(hour24 === 0) {
        hours = 12;
    }
    else {
        hours = hour24;
    }
    hours = String(hours).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    console.log("Today is " +
        day + ", " +
        month + " " +
        date.getDate() + ", " +
        date.getFullYear() +
        ", and the time is " +
        hours + ":" +
        minutes + ":" +
        seconds + " " +
        zone + ".");
}