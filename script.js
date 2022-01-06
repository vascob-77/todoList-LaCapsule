const itemAll = document.querySelectorAll('.item');
const titre = document.getElementById('titre')
const categorie = document.getElementById('categorie')
const date = document.getElementById('date')
const mainContainer = document.getElementById('main_container');


let divItem = '';

// console.log(itemAll);
// ---------- Function ------------

function createElement(nom,balise,classe = '',text='',inBalise){
    nom = document.createElement(balise);
    nom.className = classe;
    nom.textContent = text
    inBalise.appendChild(nom);
    divItem = nom;
}


// Ajout 

const addItem = () => {

    // Div Item
    createElement('divItem','div','item','',mainContainer)
    createElement('titleh3','h3','','Ceci est un titre h3',divItem)

    // let titleH3 = document.createElement('h3');
    // titleH3.textContent = 'Ceci est un titre h3'
    // divItem.appendChild(titleH3);

}


// Supprimer au clic 

const deleteHandler = (item) => {
    item.remove()
}


// --------- Evenement -------------

// DELETE CARD 

itemAll.forEach((item) => {
    item.addEventListener('click',() => {
        deleteHandler(item)
    })
})

// ADD CARD 

addItem();

// console.log(itemAll);