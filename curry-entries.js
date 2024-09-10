const reduceCurry = (func) => {
    return function (obj, initial) {
        let result = initial;
        for (const [key, value] of Object.entries(obj)) {
            result = func(result, [key, value]);
        }
        return result;
    }
}

const defaultCurry = (obj1) => {
    return function (obj2) {
        return { ...obj1, ...obj2 };
    }
}

const mapCurry = (func) => {
    return function (obj) {
        const result = {};
        for (const [key, value] of Object.entries(obj)) {
            const [newKey, newValue] = func([key, value])
            result[newKey] = newValue;

        }
        return result;
    }
}

const filterCurry = (func) => {
    return function (obj) {
        let result = {};
        for (const [key, value] of Object.entries(obj)) {
            if (func([key, value])) {
                result[key] = value;
            }
        }
        return result;
    }
}


const reduceScore = (personnel, initialValue = 0) => {
    return reduceCurry((acc, [_, person]) =>
        person.isForceUser ? acc + person.pilotingScore + person.shootingScore : acc
    )(personnel, initialValue);
};

const filterForce = (personnel) => {
    return filterCurry(([_, person]) =>
        person.isForceUser && person.shootingScore >= 80
    )(personnel);
};

const mapAverage = (personnel) => {
    return mapCurry(([key, person]) => [
        key,
        { ...person, averageScore: (person.pilotingScore + person.shootingScore) / 2 }
    ])(personnel);
};

