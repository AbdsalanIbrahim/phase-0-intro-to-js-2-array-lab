let cats = ["Milo", "Otis", "Garfield"];

function renderCats() {
    const catsUl = document.getElementById('cats-ul');
    catsUl.innerHTML = ''; 
    cats.forEach(cat => {
        const li = document.createElement('li');
        li.textContent = cat;
        catsUl.appendChild(li);
    });
}

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

document.getElementById('append-cat').addEventListener('click', () => {
    const catName = document.getElementById('new-cat-name').value.trim();
    if (catName) {
        destructivelyAppendCat(catName);
        renderCats();
        document.getElementById('new-cat-name').value = ''; 
    } else {
        alert("Please enter a cat name.");
    }
});

document.getElementById('prepend-cat').addEventListener('click', () => {
    const catName = document.getElementById('new-cat-name').value.trim();
    if (catName) {
        destructivelyPrependCat(catName);
        renderCats();
        document.getElementById('new-cat-name').value = ''; 
    } else {
        alert("Please enter a cat name.");
    }
});

document.getElementById('remove-last-cat').addEventListener('click', () => {
    destructivelyRemoveLastCat();
    renderCats();
});

document.getElementById('remove-first-cat').addEventListener('click', () => {
    destructivelyRemoveFirstCat();
    renderCats();
});

renderCats();
