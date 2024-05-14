/*Creare l’array di oggetti con le informazioni fornite.*/
const employe = [

    employe1 = {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },

    employe2 = {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },

    employe3 = {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },

    employe4 = {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },

    employe5 = {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },

    employe6 = {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];

/*Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto*/

for(let i = 0; i < employe.length; i++){
    console.log('%cMembro del Team numero: ' + (i + 1) , 'color: #FF0000');
    console.log('Nome: ' + employe[i].name);
    console.log('Ruolo: ' + employe[i].role);
    console.log('Link alla foto: ' + employe[i].image);
}

/*Stampare le stesse informazioni su DOM sottoforma di stringhe*/

/*BONUS Stilizzare tutte le informazioni nelle card e far apparire le immagini sul DOM*/

createCard(employe);

function createCard(functionEmploye){

    //const row = document.getElementById('row');
    const row = document.querySelector('.row');

    for(let i = 0; i < employe.length; i++){

        const col = document.createElement('div');
        col.classList.add('col');

        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = `img/${employe[i].image}`;

        const name = document.createElement('h3');
        name.innerText = employe[i].name;

        const role = document.createElement('p');
        role.innerText = employe[i].role;

        card.appendChild(image);

        card.appendChild(name);

        card.appendChild(role);

        col.appendChild(card);

        row.appendChild(col);
    }
}