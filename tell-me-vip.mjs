import { writeFile } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';
import { readdir } from 'node:fs/promises';
import { argv } from 'node:process'

let filePath = argv[2]
let files
let store = []
let list = ""
try {
    files = await readdir(filePath);
    for (let i = 0; i < files.length; i++) {
        let content = await readFile(`${filePath}/${files[i]}`, 'utf8')
        let obj = (JSON.parse(content))
        if (obj.answer === 'yes') {
            store.push(files[i])
        }
    }
    let result = split(store)
    result.sort()
    //  console.log(result)
    for (let i = 0; i < result.length; i++) {
        list += `${i + 1}. ${result[i]}`;
        if (i < result.length - 1) {
            list += "\n";
        }
    }
    writeFile('vip.txt', list)
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