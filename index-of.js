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

const lastIndexOf = (args, value, index) => {
    if (args == null) {
        return -1
    }
    let found = -1;
    let start = args.length -1  
    if (index != undefined) {
        start = index
    } 
    for (let i = start ; i >= 0; i--) {
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
    for (let i = 0; i < args.length; i++) {
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

console.log(lastIndexOf(['t', 0, 0, 't'], 't', 2))