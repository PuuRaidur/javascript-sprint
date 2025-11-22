function calculateFines(carData) {
    const cars = JSON.parse(carData);

    const result = cars.reduce((acc, car) => {
        const [make, model, reg, year, fuel] = car;
        let fine = 0;

        if (year < 2000) {
            fine = 20;
        } else if (fuel === 'diesel' && year < 2015) {
            fine = 10;
        }

        if (fine > 0) {
            acc.totalFines += fine;
            acc.cars.push({ reg, year, fuel, fine });
        }

        return acc;
    }, { totalFines: 0, cars: [] });

    return JSON.stringify(result);
}