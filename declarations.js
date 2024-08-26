const escapeStr = "\`\\\/\"\'";
const arr = [4, '2'];
Object.freeze(arr);
const obj = {
    "str": "My string",
    "num": 4,
    "bool": true,
    "undef": undefined
};
Object.freeze(obj);
const nested = {
    arr: [4, undefined, '2'],
    obj: {
        "str": "Hello js",
        "num": 4,
        "bool": true
    }
};
Object.freeze(nested.arr);
Object.freeze(nested.obj);
Object.freeze(nested.obj.str); 
Object.freeze(nested.obj.num); 
Object.freeze(nested.obj.bool); 
Object.freeze(nested);
