function classifyDate(dateString) {
    const currentDate = new Date();
    const diff = dateString.getTime() - currentDate.getTime();
    if(diff < 0) {
        return "past"
    }
    else if(diff < -1000 * 60 * 60 * 24 * 365 * 100) {
        return "ancient"
    }
    else if(diff <= 1000 * 60 * 60 * 24 * 365 * 100) {
        return "future"
    }
    else {
        return "distant future"
    }
}