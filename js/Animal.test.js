"use strict";

import { Animal } from "./Animal.class.js";

// Scénario Nominal
let plouc = new Animal("Plouc", "Chat", true);
plouc.afficher();

let balou = new Animal("Balou", "chien");
balou.afficher();

try {
    //let animal1 = new Animal();
    //let animal1 = new Animal("Pl");
    //let animal1 = new Animal("Plo");
    //let animal1 = new Animal("Plouc", "P");
    let animal1 = new Animal("Plouc", "Chat", "toto");
} catch(err) {
    console.error(err.message);
}