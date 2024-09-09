const filterValues = (obj, func) =>{
    result = {};
    for (const [key, value] of Object.entries(obj)) {
        if (func(value)) result[key] = value;
    }
    return result
}

const mapValues = (obj, func) =>{
    result = {};
    for (const [key, value] of Object.entries(obj)) {
        result[key] = func(value);
    }
    return result
}

const reduceValues = (obj, func, initial) =>{
    let values
    let acc
    let start
    if (initial === undefined){
         values = Array.from(Object.values(obj))
         acc = values[0]
         start = 1
    } else {
        acc = initial
        values = Array.from(Object.values(obj))
        start = 0
    }
    for (let i = start; i < values.length; i++){
        acc = func(acc,values[i])
    }
    return acc
 
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
