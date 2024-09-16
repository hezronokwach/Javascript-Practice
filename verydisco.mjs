import { argv } from 'node:process';
let args
if (argv.length < 3) {
    args = argv.slice(2);
} else {
    args = argv.slice(2, 3)
}
function myDisco(word) {
    let middle = Math.ceil(word.length / 2);
    let first = word.slice(0, middle);
    let end = word.slice(middle);
    return end +  first;
}

function processInput(input) {
    return input[0].split(' ').map(word => myDisco(word)).join(' ');
}

console.log(processInput(args));