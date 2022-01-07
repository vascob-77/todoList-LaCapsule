const itemAll = document.querySelectorAll(".item");
const mainContainer = document.getElementById("main_container");
const titre = document.getElementById("titre");
const categorie = document.getElementById("categorie");
const date = document.getElementById("date");
const btnOk = document.getElementById('ok');


// console.log(itemAll);
// ---------- Function ------------

const createElement = (balise, container, classe = "", text = "") => {
    const el = document.createElement(balise);
    el.className = classe;
    el.textContent = text;
    container.appendChild(el);
    return el;
}

// Ajout

const addItem = (titre,categorie,date) => {
    const divItem = createElement("div", mainContainer, "item", "");
    createElement("h3", divItem, "", categorie);
    createElement("p", divItem, "", titre);
    createElement("p", divItem, "", date);

    divItem.addEventListener('click', () => {
        deleteHandler(divItem)
    })
};

// Supprimer au clic

const deleteHandler = (item) => {
    item.remove();
};

// --------- Evenement -------------

// DELETE CARD

itemAll.forEach((item) => {
    item.addEventListener("click", () => {
        deleteHandler(item);
    });
});

// ADD CARD

btnOk.addEventListener('click',() => {
    addItem(titre.value,categorie.value,date.value)
    titre.value = '';
    categorie.value = '';
    date.value = '';
})