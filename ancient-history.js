function classifyDate(dateString) {
    const currentDate = Date.now();
    const msInYear = 365.25 * 24 * 60 * 60 * 1000;
    const diff = dateString - currentDate;

    if (diff <= 0) {
        const age = currentDate - dateString;
        if(age > msInYear) {
            return 'ancient'
        }
        else {
            return 'past'
        }
    } else {
        if(diff > msInYear) {
            return 'distant future'
        }
        else {
            return 'future'
        }
    }
}