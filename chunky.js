const chunk =(value, size) => {
    let result = [];
    for(let i =0; i < value.length; i+= size){
        let end = i+size;
        if (end > value.length){
            end = value.length;
        }
        result.push(value.slice(i,end));

    }
    return result;
} 
