const neuron = (arr) => {
    if (arr.length === 0) return {};
    let result = {};

    for (let item of arr) {
        let [categoryPart, responsePart] = item.split(' - ');
        let [category, input] = categoryPart.split(': ');
        let response = responsePart.split(': ')[1];
        let key = sanitizeKey(input);

        if (!result[category.toLowerCase()]) {
            result[category.toLowerCase()] = {};
        }
        if (!result[category.toLowerCase()][key]) {
            result[category.toLowerCase()][key] = { 
                [category.toLowerCase().slice(0, -1)]: input, 
                responses: [] 
            };
        }
        result[category.toLowerCase()][key].responses.push(response);
    }

    return result;
};

function sanitizeKey(input) {
    return input.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
}