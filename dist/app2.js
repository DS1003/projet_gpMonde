// Types for Leaflet and Turf.js
/// <reference types="leaflet" />
/// <reference types="turf" />
class Person {
    prenomNom;
    adresse;
    telephone;
    email;
    constructor(prenomNom, adresse, telephone, email) {
        this.prenomNom = prenomNom;
        this.adresse = adresse;
        this.telephone = telephone;
        this.email = email;
    }
}
class Expediteur extends Person {
    constructor(prenomNom, adresse, telephone, email) {
        super(prenomNom, adresse, telephone, email);
    }
}
class Client extends Person {
    constructor(prenomNom, adresse, telephone, email) {
        super(prenomNom, adresse, telephone, email);
    }
}
class Product {
    code;
    name;
    quantite;
    poids;
    prix;
    type;
    expediteur;
    receveur;
    constructor(code, name, quantite, poids, prix, type, expediteur, receveur) {
        this.code = code;
        this.name = name;
        this.quantite = quantite;
        this.poids = poids;
        this.prix = prix;
        this.type = type;
        this.expediteur = expediteur;
        this.receveur = receveur;
    }
}
class FragileProduct extends Product {
    constructor(code, name, quantite, poids, prix, expediteur, receveur) {
        super(code, name, quantite, poids, prix, "fragile", expediteur, receveur);
    }
}
class IncassableProduct extends Product {
    constructor(code, name, quantite, poids, prix, expediteur, receveur) {
        super(code, name, quantite, poids, prix, "incassable", expediteur, receveur);
    }
}
class AlimentaireProduct extends Product {
    constructor(code, name, quantite, poids, prix, expediteur, receveur) {
        super(code, name, quantite, poids, prix, "alimentaire", expediteur, receveur);
    }
}
class ChimiqueProduct extends Product {
    constructor(code, name, quantite, poids, prix, expediteur, receveur) {
        super(code, name, quantite, poids, prix, "chimique", expediteur, receveur);
    }
}
class Cargo {
    numero;
    prix;
    lieuDepart;
    lieuArrive;
    distance;
    dateDepart;
    dateArrivee;
    typeProduit;
    poidsMax;
    nbProduitsMax;
    statut;
    etat;
    produits;
    constructor(numero, prix, lieuDepart, lieuArrive, distance, dateDepart, dateArrivee, typeProduit, statut, etat, poidsMax, nbProduitsMax) {
        this.numero = numero;
        this.prix = prix;
        this.lieuDepart = lieuDepart;
        this.lieuArrive = lieuArrive;
        this.distance = distance;
        this.dateDepart = dateDepart;
        this.dateArrivee = dateArrivee;
        this.typeProduit = typeProduit;
        this.statut = statut;
        this.etat = etat;
        this.poidsMax = poidsMax;
        this.nbProduitsMax = nbProduitsMax;
        this.produits = [];
    }
    addProduct(product) {
        if (this.poidsMax && this.calculateTotalPoids() + product.poids > this.poidsMax) {
            throw new Error("Poids maximum dépassé");
        }
        if (this.nbProduitsMax && this.produits.length + 1 > this.nbProduitsMax) {
            throw new Error("Nombre maximum de produits dépassé");
        }
        this.produits.push(product);
    }
    calculateTotalPoids() {
        return this.produits.reduce((total, product) => total + product.poids, 0);
    }
}
class AerienneCargo extends Cargo {
    constructor(numero, prix, lieuDepart, lieuArrive, distance, dateDepart, dateArrivee, typeProduit, statut, etat, poidsMax, nbProduitsMax) {
        super(numero, prix, lieuDepart, lieuArrive, distance, dateDepart, dateArrivee, typeProduit, statut, etat, poidsMax, nbProduitsMax);
    }
}
class MaritimeCargo extends Cargo {
    constructor(numero, prix, lieuDepart, lieuArrive, distance, dateDepart, dateArrivee, typeProduit, statut, etat, poidsMax, nbProduitsMax) {
        super(numero, prix, lieuDepart, lieuArrive, distance, dateDepart, dateArrivee, typeProduit, statut, etat, poidsMax, nbProduitsMax);
    }
}
class TerrestreCargo extends Cargo {
    constructor(numero, prix, lieuDepart, lieuArrive, distance, dateDepart, dateArrivee, typeProduit, statut, etat, poidsMax, nbProduitsMax) {
        super(numero, prix, lieuDepart, lieuArrive, distance, dateDepart, dateArrivee, typeProduit, statut, etat, poidsMax, nbProduitsMax);
    }
}
const cargo = new TerrestreCargo("CGN315", 51, "67, Rue des Plantes, Quartier du Petit-Montrouge, Paris 14e Arrondissement, Paris, Île-de-France, France métropolitaine, 75014, France", "11, Rue Quinault, Quartier Necker, Paris 15e Arrondissement, Paris, Île-de-France, France métropolitaine, 75015, France", 2.52, new Date("2015-01-01"), new Date("2015-01-01"), ["alimentaire", "incassable", "fragile"], "en-attente", "ferme", 25, 25);
export {};
