import { readdir } from 'node:fs/promises';
import { argv } from 'node:process'

let filePath=argv[2]
let files
try {
    files = await readdir(filePath);
    let result = split(files)
    result.sort()
  //  console.log(result)
    for (let i = 0; i < result.length; i++) {
        console.log(`${i+1}. ${result[i]}`)
    }
} catch (err) {
    console.error(err);
}
//console.log(files)

function split(arr) {
    let result = []
    for (let file of arr) {
        let store = file.split('_')
        store[1] = store[1].slice(0, -5)
        let conc = store[1] + " " + store[0]        
        result.push(conc) 
        
    }
    return result
}

//console.log(split(['Dotty_Dunlap.json']))
// let path = process.cwd()
// console.log(path)