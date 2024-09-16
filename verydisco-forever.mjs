import { argv } from 'node:process';
import { writeFile } from 'node:fs/promises';
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
    return end + first;
}

function processInput(input) {
    if (input.length === 0) return '';
    return input[0].split(' ').map(word => myDisco(word)).join(' ');
}

const result = (processInput(args));
writeFile('verydisco-forever.txt',result)