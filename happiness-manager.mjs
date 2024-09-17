'use strict';

import { readdir, readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";

const guestDir = process.argv[2] ?? './guests';
const shoppingListFile = process.argv[3] ?? 'shopping-list.json';

let drinkPreferences = {
    beer: 0,
    wine: 0,
    water: 0,
    soft: 0,
};

let foodPreferences = {
    eggplants: 0,
    mushrooms: 0,
    hummus: 0,
    courgettes: 0,
    burgers: 0,
    sardines: 0,
    kebabs: 0,
    potatoes: 0,
};

let totalGuests = 0;

function processGuest(guestData) {
    if (guestData.answer === 'yes') {
        totalGuests++;
        foodPreferences.potatoes++;
        
        if (guestData.drink) {
            drinkPreferences[guestData.drink]++;
        }

        switch (guestData.food) {
            case 'veggie':
            case 'vegan':
                foodPreferences.mushrooms += 3;
                foodPreferences.eggplants++;
                foodPreferences.hummus++;
                foodPreferences.courgettes++;
                break;
            case 'carnivore':
                foodPreferences.burgers++;
                break;
            case 'fish':
                foodPreferences.sardines++;
                break;
            case 'everything':
                foodPreferences.kebabs++;
                break;
        }
    }
}

let shoppingList = {};
if (existsSync(shoppingListFile)) {
    shoppingList = await readFile(shoppingListFile)
        .then((content) => content.length > 0 ? JSON.parse(content) : {})
        .catch((err) => {
            console.error(new Error(`Failed to parse shopping list in ${shoppingListFile}: ${err}\nA new list will be created.`));
        });
}

const guestFiles = (await readdir(guestDir)).filter(file => file.endsWith('.json'));
const guestPromises = guestFiles.map(
    fileName => readFile(`${guestDir}/${fileName}`)
        .then((content) => JSON.parse(content))
        .then(processGuest)
);
await Promise.all(guestPromises);

if (!totalGuests) {
    console.log('No one is coming.');
    process.exit(0);
}

if (!shoppingList) {
    process.exit(0);
}

if (drinkPreferences.beer) {
    shoppingList['6-packs-beers'] = Math.ceil(drinkPreferences.beer / 6);
}
for (let beverage of ['water', 'wine', 'soft']) {
    if (drinkPreferences[beverage]) {
        shoppingList[`${beverage}-bottles`] = Math.ceil(drinkPreferences[beverage] / 4);
    }
}

for (let veggie of ['eggplants', 'mushrooms', 'hummus', 'courgettes']) {
    if (foodPreferences[veggie]) {
        shoppingList[veggie] = Math.ceil(foodPreferences[veggie] / 3);
    }
}
for (let meat of ['burgers', 'sardines', 'kebabs', 'potatoes']) {
    if (foodPreferences[meat]) {
        shoppingList[meat] = Math.ceil(foodPreferences[meat]);
    }
}

await writeFile(shoppingListFile, JSON.stringify(shoppingList));
