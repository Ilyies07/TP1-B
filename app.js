import {injectElements, renewTag} from "./functions/dom.js";

const wrapper = document.querySelector('#controle')


function start() {
    const etapes = [
        { title: "Commence a faire le café", duree: 1 },
        { title: "Mouds les grain de café", duree: 3 },
        { title: "Fais chauffer l'eau", duree: 5 },
        { title: "Infuse les grains de café moulus", duree: 4 },
        { title: "Verse le café dans une tasse", duree: 2 },
        { title: "Ajoute un peu de lait dans la tasse", duree: 6 },
        { title: "Le café est terminé", duree: 7 }
    ];
    const laListe = renewTag('ul');
    wrapper.append(laListe);

    injectElements(etapes, laListe);
}

document.querySelector('#start').addEventListener('click', start)


