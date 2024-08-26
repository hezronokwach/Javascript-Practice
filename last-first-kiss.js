function first(args) {
    return args[0]
}

function last(args) {
    return args[args.length - 1]
}

function kiss(args) {
    let result = [args[args.length - 1], args[0]]
    return result
}