"use strict"

export class Animal {
    // attribue 
    #nom = "";
    #espece = "";
    #vol;
    // constructeur
    constructor(nom,espece,vol = false) {
        this.#setNom(nom);
        this.#setEspece(espece);
        this.#setVol(vol);
    }

    // Setter

    #setNom(nom) {
        if (!nom) throw new Error("Paramètre 'nom' obligatoire");
        if (nom.length < 3) throw new Error("Paramètre 'nom' doit avoir 3 caractères minimum");

        this.setNom = nom;
    }
    
    #setEspece(espece) {
        if (!espece) throw new Error("Paramètre 'espece' obligatoire");
        if (espece.length < 3) throw new Error("Paramètre 'espece' doit avoir 3 caractères minimum");

        this.#espece = espece;
    }
    
    #setVol(vol) {
        if (typeof(vol) != "boolean") throw new Error("Paramètre 'vol' est un booléen");

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

    affichez() {
        console.log (this.#espece + " s'appel " + this.#nom + (this.#vol? "vole" : "ne vole pas"))
    }
}