function words(args) {
    return args.split(' ')
}

function sentence(args) {
    return args.join(' ')
}

function yell(args){
    return args.toUpperCase()
}

function whisper(args){
    return '*' + args.toLowerCase() + '*'
}

function capitalize(args){
    return args[0].toUpperCase() + args.slice(1).toLowerCase()    
}
console.log(whisper('DÉJÀ VU'))

