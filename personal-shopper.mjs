import { readFile, writeFile, unlink } from "fs/promises";
import { existsSync, write } from "fs";
import { argv } from "process";

const [_, __, filename, action, item, quantity] = argv;

switch (action) {
    case 'create':
        createFile(filename);
        break;
    case 'delete':
        deleteFile(filename);
        break;
    case 'add':
        if (!item) {
            console.log("No elem specified")
        } else {
            add(filename, item, quantity);
        }
        break;
    case 'rm':
        if (!item) {
            console.log("No elem specified")
        } else {
            remove(filename, item, quantity);
        }
        break;
    case 'ls':
        listItems(filename);
        break;
    case 'help':
    default:
        printHelp();
        break;
}

function createFile(filename) {
    if (existsSync(filename)) {
        console.log("File already exists");
    } else {
        try {
            const emptyJson = JSON.stringify({}, null, 2);
            writeFile(filename, emptyJson);
            console.log("File created successfully");
        } catch (err) {
            console.error("Error creating file:", err);
        }
    }
}

const deleteFile = async (filename) => {
    if (existsSync(filename)) {
        try {
            await unlink(filename);
            console.log("File deleted successfully");
        } catch (err) {
            console.error("Error deleting file:", err);
        }
    } else {
        console.log("File does not exist");
    }
}

const add = async (filename, item, quantity) => {
    try {
        let content = await readFile(filename, 'utf8');
        let json = JSON.parse(content);
        let quantityToAdd = parseInt(quantity) || 1;
        if (json.hasOwnProperty(item)) {
            json[item] += quantityToAdd;
        } else {
            json[item] = quantityToAdd;
        }
        if (json[item] <= 0) {
            delete json[item];
        }
        await writeFile(filename, JSON.stringify(json, null, 2));
        console.log(`Added ${quantityToAdd} ${item}(s) to the list`);
    } catch (err) {
        console.error("Error updating file:", err);
    }
}

const remove = async (filename, item, quantity) => {
    try {
        let content = await readFile(filename, 'utf8');
        let json = JSON.parse(content);
        if (json.hasOwnProperty(item)) {
            let quantityToRemove = parseInt(quantity) || json[item];
            if (quantityToRemove < 0) {
                json[item] += Math.abs(quantityToRemove);
            } else {
                json[item] -= quantityToRemove;
            }
            if (json[item] <= 0) {
                delete json[item];
            }
            await writeFile(filename, JSON.stringify(json, null, 2));
            console.log(`Removed ${quantity || 'all'} ${item}(s) from the list`);
        } else {
            console.log(`${item} not found in the list`);
        }
    } catch (err) {
        console.error("Error updating file:", err);
    }
}

const listItems = async (filename) => {
    try {
        let content = await readFile(filename, 'utf8')
        let json = JSON.parse(content)
        if (Object.keys(json).length === 0) {
            console.log("Empty list.")
        } else {
            for (let key in json) {
                console.log(`- ${key} (${json[key]})`)
            }
        }
    } catch (err) {
        console.error("Error reading file:", err);
    }
}

function printHelp() {
    console.log("Available commands:")
    console.log("create <filename>: Create a new shopping list")
    console.log("delete <filename>: Delete an existing shopping list")
    console.log("add <filename> <item> <quantity>: Add an item to the list")
    console.log("rm <filename> <item> <quantity>: Remove an item from the list")
    console.log("ls <filename>: List all items in the shopping list")
    console.log("help: Show this help message")

}
