let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name); 
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop(); 
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift(); 
    return cats;
}

function updateCatsList() {
    const catsList = document.getElementById('cats-list');
    catsList.innerHTML = ''; 
    cats.forEach(cat => {
        const li = document.createElement('li');
        li.textContent = cat; 
        catsList.appendChild(li); 
    });
}

document.getElementById('add-cat-btn').addEventListener('click', () => {
    const catNameInput = document.getElementById('cat-name');
    const catName = catNameInput.value.trim();
    if (catName) {
        destructivelyAppendCat(catName); 
        updateCatsList(); 
        catNameInput.value = ''; 
    }
});

document.getElementById('remove-last-cat-btn').addEventListener('click', () => {
    destructivelyRemoveLastCat(); 
    updateCatsList(); 
});

document.getElementById('remove-first-cat-btn').addEventListener('click', () => {
    destructivelyRemoveFirstCat(); 
    updateCatsList(); 
});

updateCatsList();
