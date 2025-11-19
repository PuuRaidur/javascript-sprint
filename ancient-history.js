function classifyDate(dateString) {
    const currentDate = new Date();
    if(dateString > (currentDate.getFullYear() - 1) && dateString <= currentDate) {
        return "past"
    }
    if(dateString < currentDate.getFullYear() - 1 - (currentDate.getMilliseconds() - 0.001)) {
        return "history"
    }
    if(dateString < currentDate.getMilliseconds() + 0.001 && dateString < currentDate.getFullYear() + 1) {
        return "future"
    }
    else {
        return "distant future"
    }
}