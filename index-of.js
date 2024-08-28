const indexOf = (args, value, index) => {
    let found = -1;
    if (args == null) {
        return -1
    }
    if (index === undefined) {
        index = 0
    }
    for (let i = 0 || index; i < args.length; i++) {
        if (args[i] === value) {
            found = i
            return i
        }
    }
    if (found == -1) {
        return -1
    }
}

const lastIndexOf = (args, value) => {
    let found = -1;
    if (args == null) {
        return -1
    }
    for (let i = args.length - 1; i > 0; i--) {
        if (args[i] === value) {
            found = i
            return i
        }
    }
    if (found == -1) {
        return -1
    }
}

const includes = (args, value) => {
    let found = -1;
    if (args == null) {
        return false
    }
    for (let i = 0 ; i < args.length; i++) {
        if (args[i] === value) {
            found = i
        }
    }
    if (found == -1) {
        return false
    } else {
        return true
    }
}

console.log(includes([1, 2, 3, 2, 6, 8, 3, 2, 1]))