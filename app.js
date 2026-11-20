const wrapper = document.querySelector('#controle');

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

function etape2() {
    const labelSaisie = createElement("label", { for: "saisie" });

    const saisie = createElement("input", {
        type: "text",
        id: "saisie",
    });

    labelSaisie.innerText = "saisissez le nombre de tasses de café demandé :";

    wrapper.prepend(saisie);
    wrapper.prepend(labelSaisie);

    const bouton = document.querySelector('#start');
    bouton.innerText = "Calculer";

    bouton.removeEventListener('click', start);
    bouton.addEventListener('click', calculEtape2);
}

function calculEtape2() {
    const resultat = [
        { ingredient: 'eau', quantity: 0, message: ' ml d\'eau' },
        { ingredient: 'cafe', quantity: 0, message: ' g de grains de café' },
        { ingredient: 'lait', quantity: 0, message: ' ml de lait' },
    ];

    const nombresDeTasses = document.querySelector('#saisie').value * 1;
    const { ingredients } = recettes.find((nom) => nom.title === 'Cafe');

    for (const nomIngredient in ingredients) {
        resultat.find((element) => {
            if (element.ingredient === nomIngredient) {
                element.quantity = nombresDeTasses * ingredients[nomIngredient];
            }
        });
    }

    function calculEtape3() {
        const [eauDispo, laitDispo, cafeDispo, tassesDemandees] = document.querySelector('#saisie')
    }

    const laListe = renewTag('ul');
    wrapper.append(laListe);

    for (const ligne of resultat) {
        const li = createElement('li');
        li.innerText = `${ligne.quantity}${ligne.message}`;
        laListe.append(li);
    }
}

etape2();