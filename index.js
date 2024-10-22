let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAddCat(name) {
    cats.push(name);
    return cats;
}

function addCat(name) {
    return [...cats, name];
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function destructivelyAddCatAtBeginning(name) {
    cats.unshift(name);
    return cats;
}

function addCatAtBeginning(name) {
    return [name, ...cats];
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function removeFirstCat() {
    return cats.slice(1);
}

console.log("Initial cats:", cats);
console.log("Add a cat destructively:", destructivelyAddCat("Whiskers"));
console.log("Add a cat nondestructively:", addCat("Simba"));
console.log("Remove last cat destructively:", destructivelyRemoveLastCat());
console.log("Remove last cat nondestructively:", removeLastCat());
console.log("Add a cat at beginning destructively:", destructivelyAddCatAtBeginning("Bella"));
console.log("Add a cat at beginning nondestructively:", addCatAtBeginning("Leo"));
console.log("Remove first cat destructively:", destructivelyRemoveFirstCat());
console.log("Remove first cat nondestructively:", removeFirstCat());