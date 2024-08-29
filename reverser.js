const reverse = (value) => {
    let result = [];
    let resultStr = ""
    if (Array.isArray(value)){
        for (let i = value.length-1; i >= 0; i-- ){
            result.push(value[i])
        }
        return result
    } else if (typeof value === 'string'){
        for (let i = value.length-1; i >= 0; i-- ){
            resultStr += value[i]
        }
        return resultStr
    }  
}

console.log(reverse('pouet'))