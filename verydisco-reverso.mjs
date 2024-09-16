import {argv} from 'node:process'
import {readFile} from 'node:fs/promises'

let args = argv[2]
const  myDisco = (word) => {   
    let middle = Math.floor(word.length / 2);
    let first = word.slice(0, middle);
    let end = word.slice(middle);
    return end +  first;
} 

const processInput = async() =>{
    const contents = await readFile(args, 'utf8');
    let input =  [contents];
    if (input.length === 0) return '';
    return input[0].split(" ").map(word => myDisco(word)).join(' ');
}
console.log(await processInput());

