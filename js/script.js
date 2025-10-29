"use strict"

    import { Animal } from "./Animal.class.js";

    // déclarer le variable 
    let inputNom = document.getElementById("idNom");
    let inputEspece = document.getElementById("idEsp");
    let inputVol = document.getElementById("idVol");
    let btnCreer = document.getElementById("btnCreer");
    let btnVider = document.getElementById("btnvide");
    let divErr = document.getElementById("idErr");
    let divListe = document.getElementById("idListe");

    // abonner les btn

    btnCreer.addEventListener("click", recupChamps);
    // btnVider.addEventListener("click", viderListe);

    function recupChamps() {
        // prend les valeurs du form
        let nom = inputNom.value;
        let espece = inputEspece.value;
        let vol = inputVol.checked;
        let msg;

        try {
            // et creer un animal avec les valeur

            let animal = new Animal (nom,espece,vol);
       
            //afficher en ajoutant le afficher() dans la liste
            divListe.innerHTML += animal.afficher() + "\n+<br>\n";

        } catch(err) {
            divErr.innerText = err.message;
        }
    
    }