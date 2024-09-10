const filterEntries = (obj, func) => {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        if (func([key, value])) {
            result[key] = value;
        }
    }
    return result;
};

const mapEntries = (obj, func) => {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        const [newKey, newValue] = func([key, value])
        result[newKey] = newValue;

    }
    return result;
};
const reduceEntries = (obj, func, initial) => {
    const entries = Object.entries(obj);
    let acc, start;
    if (initial === undefined) {
        if (entries.length === 0) return undefined;
        acc = entries[0][1];
        start = 1;
    } else {
        acc = initial;
        start = 0;
    }
    for (let i = start; i < entries.length; i++) {
        acc = func(acc, entries[i]);
    }
    return acc;
};

const totalCalories = (cart) => {
    return Number(reduceEntries(cart, (total, [item, amount]) => 
        total + nutritionDB[item].calories * amount / 100, 0).toFixed(1));
};

const lowCarbs = (cart) => {
    return filterEntries(cart, ([item, amount]) => 
        nutritionDB[item].carbs * amount / 100 < 50);
};

const cartTotal = (cart) => {
    return mapEntries(cart, ([item, amount]) => {
        const itemTotal = {};
        for (const nutrient in nutritionDB[item]) {
            itemTotal[nutrient] = Number((nutritionDB[item][nutrient] * amount / 100).toFixed(3));
        }
        return [item, itemTotal];
    });
};
