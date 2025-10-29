"use strict"

export class Animal {
    // attribue 
    #nom = "";
    #espece = "";
    #vol;
    // constructeur
    /**
     * crée un animal avec param en privé
     * @param {string} nom 
     * @param {string} espece 
     * @param {boolean} vol 
     */
    constructor(nom,espece,vol = false) {
        this.#setNom(nom);
        this.#setEspece(espece);
        this.#setVol(vol);
    }

    // Setter

    #setNom(nom) {
        if (!nom) throw new Error("Le paramètre 'nom' est obligatoire");
        if (nom.length < 3) throw new Error("Paramètre 'nom' doit avoir 3 caractères minimum");

        this.#nom = nom;
    }
    
    #setEspece(espece) {
        if (!espece) throw new Error("Le paramètre 'espece' est obligatoire");
        if (espece.length < 3) throw new Error("Paramètre 'espece' doit avoir 3 caractères minimum");

        this.#espece = espece;
    }
    
    #setVol(vol) {
        if (typeof(vol) != "boolean") throw new Error("Le paramètre 'vol' est un booléen");

        this.#vol = vol;
    }

    // Getter

    getNom() {
        return this.#nom;
    }
    getEspece() {
        return this.#espece;
    }
    getVol() {
        return this.#vol;
    }

    // Methode

    afficher() {
        return ( ` L'animal est un  ${this.#espece}  qui s'appel  ${this.#nom}  ${this.#vol? " et il(elle) peut voler" : " et il(elle) ne peut pas voler"}`);
    }
}