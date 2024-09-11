const flags = (obj) => {
    let output = { alias: { h: 'help' }, description: "" }
    let flagDescription = {}
    
    for (let key in obj) {
        output.alias[Alias(key)] = key
        if (key !== 'help') {
            flagDescription[key] = obj[key]
        }
    }
    
    if (!obj.hasOwnProperty('help') || obj.help === '') {
        output.description = Object.entries(flagDescription)
            .map(([key, desc]) => `-${Alias(key)}, --${key}: ${desc}`)
            .join('')
    } else if (Array.isArray(obj.help)) {
        output.description = obj.help.map(key => 
            `-${Alias(key)}, --${key}: ${flagDescription[key]}`
        ).join('')
    }
    
    return output
}

function Alias(word) {
    return word.charAt(0).toLowerCase()
}


console.log( flags({
    invert: 'inverts and object',
    'convert-map': 'converts the object to an array',
    assign: 'uses the function assign - assign to target object',
    help: ['assign', 'invert'],
  }))