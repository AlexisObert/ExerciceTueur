"use strict";
let prenoms
const caracteristiques=["nerd","blond","sportif","intelligent","musclé"];

function prenomRandom() {
    prenoms = ["Alain", "fabien", "christian", "paul", "Jack"];
    return prenoms[Math.floor(Math.random()*prenoms.length)];
}
function tueurAttaque() {
    return Math.random() < 0.3;
}

function survivantAttaque() {
    const esquive = Math.random() < 0.5;
    const mort = Math.random() < 0.2;
    if(esquive) {
        return 10
    }else {
        if(mort) {
            return -15;
        }else {
            return 0;
        }
    }
}

function fin(message) {
    console.log(message);
}

const survivant = [];
for (let i=0 ; i<5 ; i++) {
    const prenom = prenomRandom();
    const caracteristique = caracteristiques[Math.floor(Math.random()*caracteristiques.length)]
    survivant.push({ prenom, caracteristique});
}
let pvTueur = 100;

while (pvTueur > 0 && survivant.length > 0) {
    fin("tour suivant :");
    for(let i=0 ; i<survivant.length ; i++) {
        const survivants = survivant[i];
        fin(`le survivant ${i+1}: ${survivants.prenom} le ${survivants.caracteristique}`);
        const degats = survivantAttaque();
        if(degats < 0) {
            fin(`${survivants.nom} a infligé 15 pts de dégats sur jason mais meurt`);
            survivant.splice(i, 1);
            i--;
        }else if (degats > 0) {
            fin(`${survivants.prenom} a infligé 15 pts de dégats sur jason`);
            pvTueur -=10;
        }else {
            fin(`${survivants.prenom} a esquivé l'attaque de jason`);
        }
    }
    if(tueurAttaque()){
        fin("jason est mort");
        break;
    }
}
fin("Survivant tué :");
for(const survivants of survivant) {
    fin(`${survivants.prenom} le ${survivants.caracteristique} est mort`);
}
if(pvTueur <= 0){
    fin("les survivants on gagné !!");

}else {
    fin("jason a reussi s'enfuir. RIP aux survivants mort.");
}