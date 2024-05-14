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
        image: 'angela-caroli-chief-editor.jpg'
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