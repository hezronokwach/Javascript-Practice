import { writeFile } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';
import { argv } from 'node:process'

let filePath = argv[2];
let action = argv[3];
let output = argv[4];
let content
try {
    content = await readFile(filePath, 'utf8')

} catch (err) {
    console.error(err);

}
function encode(content) {
    return Buffer.from(content).toString('base64');
}

function decode(content) {
    return Buffer.from(content, 'base64').toString('utf-8');
}
if (action === 'encode'){
    let encoded = encode(content);
    let outFile;
    argv.length === 5 ? outFile=output : outFile='cypher.txt';
    writeFile(outFile, encoded);
}

if (action === 'decode'){
    let decoded = decode(content);
    let outFile;
    argv.length === 5 ? outFile=output : outFile='clear.txt';
    writeFile(outFile, decoded);
}