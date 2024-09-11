const flags = (obj) => {
    let output = { alias: {}, description: "" }
    let flagDescription = {}
    let ali
    for (let key in obj) {
        ali = Alias(key);
        output.alias[ali] = key
        if (key !== 'help') {
            flagDescription[key] = obj[key]
        }
    }
    if (!Array.from(Object.keys(obj)).includes('help') || obj.help === '') {
        output.description = Object.entries(flagDescription)
            .map(([key, desc]) => `-${Alias(key)}, --${key}: ${desc}`)            
    } else if (Array.isArray(obj.help)){
        output.description = Object.entries(flagDescription)
            .map(([key, desc]) => `-${Alias(obj.help)}, --${obj.help}: ${desc}`)  

    }
    return output

}

function Alias(word) {
    let result = ""
    if (word === 'multiply') {
        return 'm'
    } else if (word === 'divide') {
        return 'd'
    } else if (word === 'help') {
        return 'h'
    }

}


console.log(flags({
    multiply: 'multiply the values',
    divide: 'divides the values',
    help : ['divide']
}
))