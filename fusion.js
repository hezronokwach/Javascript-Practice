const fusion = (obj1, obj2) => {
    let result = {}
    for (const key of [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])]) {
        if (key in obj1 && key in obj2) {
            if (Array.isArray(obj1[key] && Array.isArray(obj1[key]))) {
                result[key] = [...obj1[key], ...obj2[key]]
            } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                result[key] = fusion(obj1[key], obj2[key])
            } else if (typeof obj1[key] === 'string' && typeof obj2[key] === 'string') {
                result[key] = `${obj1[key]} ${obj2[key]}`
            } else if (typeof obj1[key] === 'number' && typeof obj2[key] === 'number') {
                result[key] = obj1[key] + obj2[key]
            } else {
                result[key] = obj2[key]
            }
        } else if (key in obj2) {
            result[key] = obj2[key]
        } else {
            result[key] = obj1[key]
        }
    }
    return result;
}