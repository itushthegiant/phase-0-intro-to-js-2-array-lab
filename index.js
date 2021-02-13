// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newCat = [...cats, name];
    return newCat;
}
function prependCat(name) {
    const newCat = [name, ...cats];
    return newCat;
}

function removeLastCat() {
    const newCat = cats.slice(0, -1);
    return newCat;
}

function removeFirstCat() {
    const newCat = cats.slice(-2);
    return newCat;
}