const split = (value, split) => {
    let result = [];
    let word = "";
    for(str of value) {
        if (str === split){
            if (word != ""){
                result.push(word);
                word = ""
            }
        }else{
            word += str;
        }
    }
    if (word != ""){
        result.push(word)
    }
    return result
}

console.log(split('ee,ff,g,', ','))