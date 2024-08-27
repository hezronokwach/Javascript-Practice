const arrToSet = (value) => new Set(value);
const arrToStr = (value) => value.join("");
const setToArr = (value) => [...value];
const setToStr = (value) => [...value].join(' ');
const strToArr = (value) => value.split(" ");
const mapToObject = (value) => Object.fromEntries(value.entries());
const objToArr = (value) => Object.values(value);
const objToMap = (value) => new Map(Object.entries(value));
const arrToObj = (value) => Object.entries(value);
const strToObj = value =>Object.entries(strToArr(value));

function superTypeOf(value){
    if (value instanceof Map){
        return "Map";
    } else if (value instanceof Set){
        return "Set";
    }else if (value instanceof Object) {
        return 'Object';
    }else if (value === null) {
        return 'null';
    } else if (typeof value === "string"){
        return 'String';
    }else if (typeof value === "number" || "NaN"){
        return 'Number';
    } else if (Array.isArray(value)){
        return 'Array';
    }else if (typeof value === "undefined"){
        return 'undefined';
    }else if(typeof value === "function"){
        return 'Function'
    }
}
console.log(arrToStr([1, 'ctx', 'ctx', 3]))
