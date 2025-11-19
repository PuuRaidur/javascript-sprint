function classifyDate(dateString) {
    const currentDate = new Date();
    if(dateString > (currentDate.getFullYear() - 1) && dateString <= currentDate) {
        return "past"
    }
    if(dateString < currentDate.getFullYear() - 1) {
        return "ancient"
    }
    if(dateString > currentDate && dateString < currentDate.getFullYear() + 1) {
        return "future"
    }
    if(dateString > currentDate.getFullYear() + 1) {
        return "distant future"
    }
}