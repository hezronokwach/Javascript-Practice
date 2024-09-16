import { readdir } from 'node:fs/promises';
import { argv } from 'node:process'

let filePath
if (argv.length < 3) {
    filePath = process.cwd()
} else {
    filePath = argv[2];

}
let count = 0
try {
    const files = await readdir(filePath);
    count = files.length
} catch (err) {
    console.error(err);
}
 console.log(count)
// let path = process.cwd()
// console.log(path)