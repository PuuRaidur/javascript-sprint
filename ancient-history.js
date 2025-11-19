function classifyDate(dateString) {
    const currentDate = Date.now();
    const msInYear = 365.25 * 24 * 60 * 60 * 1000;
    const diff = dateString - currentDate;

    if (diff <= 0) {
        const age = currentDate - dateString;
        return age > msInYear ? 'ancient' : 'past';
    } else {
        return diff > msInYear ? 'distant future' : 'future';
    }
}