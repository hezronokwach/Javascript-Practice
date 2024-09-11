const neuron = (arr) => {
    if (arr.length === 0) return {};
    let result = { questions: {}, orders: {} };

    for (let item of arr) {
        let [categoryPart, responsePart] = item.split(' - ');
        let [category, input] = categoryPart.split(': ');
        let response = responsePart.split(': ')[1];
        let key = sanitizeKey(input);

        if (category === 'Questions') {
            if (!result.questions[key]) {
                result.questions[key] = { question: input, responses: [] };
            }
            result.questions[key].responses.push(response);
        } else if (category === 'Orders') {
            if (!result.orders[key]) {
                result.orders[key] = { order: input, responses: [] };
            }
            result.orders[key].responses.push(response);
        }
    }

    return result;
};

function sanitizeKey(input) {
    return input.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
}

console.log(neuron([
    'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
    'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
    'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
    'Orders: shutdown! - Response: Yes Sr!',
    'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
])
)