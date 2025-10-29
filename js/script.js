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
    let divSvg = document.getElementById("idSvg")

    // abonner les btn

    btnCreer.addEventListener("click", recupChamps);
    btnVider.addEventListener("click", viderListe);

    // Afficher les animaux sauvegardés
    let svg = localStorage.getItem("animaux");

    divListe.innerHTML = svg + "\n<br>\n";

    // DECLARER MES FONCTIONS
    function recupChamps() {
        // prend les valeurs du form
        let nom = inputNom.value;
        let espece = inputEspece.value;
        let vol = inputVol.checked;
        

        try {
            // et creer un animal avec les valeur

            let animal = new Animal (nom,espece,vol);
       
            //afficher en ajoutant le afficher() dans la liste
            divListe.innerHTML += animal.afficher() + "\n<br>\n";

            // local storage
            // let olAnimal = `{"nom":"`+ nom +`","espece":"`+ espece +`","vol":"`+ vol +`}`;
            let olAnimal = `{"nom":"${nom}","espece":"${espece}","vol":${vol}}`;
            console.log(olAnimal);

            localStorage.setItem("animaux",olAnimal);
        
        } catch(err) {
            divErr.innerText = err.message;
        }

        
    }
    // Vider liste
    function viderListe() {
        divListe.innerHTML = "";
    }