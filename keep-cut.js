const cutFirst = (str) => str.substring(2);
const cutLast = (str) => str.substring(0, str.length - 2);
const cutFirstLast = (str) => {
    if (str.length <= 4) {
        return ""
    } else {
        return str.substring(2, str.length - 2);
    }
}
const keepFirst = (str) => str.substring(0, 2);
const keepLast = (str) => str.substring(str.length - 2, str.length);
const keepFirstLast = (str) => {
    if (str.length <= 3) {
        return str
    } else {
        return keepFirst(str) + keepLast(str);
    }
}
console.log(keepFirstLast('afa'))