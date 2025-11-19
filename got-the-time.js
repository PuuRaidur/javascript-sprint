function printPrettyDate(date) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let day = "";
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
    let hour = 0;
    let zone = ''
    if(date.getHours() < 12) {
        hour = date.getHours();
        zone = "AM";
    }
    else {
        hour = date.getHours() - 12;
        zone = "PM";
    }
    console.log("Today is " +
        day + ", " +
        month + " " +
        date.getDate() + ", " +
        date.getFullYear() +
        ", and the time is " +
        hour + ":" +
        date.getMinutes() + ":" +
        date.getSeconds() + " " +
        zone + ".");
}