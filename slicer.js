const slice = (value, start, end) => {
    let resultArray = [];
    let resultStr = "";
    if (end == undefined){
        end = value.length-1;
    }
    if (end < 0 ){
        end = end + value.length-1;        
    }
    if (start < 0){
        start = start + value.length-1;
    }
    if (Array.isArray(value)){
        for (let i = start; i <= end; i++){
            resultArray.push(value[i])
        }
        return resultArray

    } 
    if (typeof value === "string"){
        for (let i = start; i <= end; i++){
            resultStr += value[i]
        }
        return resultStr
    }    
}

console.log(slice('abcdef',2))


