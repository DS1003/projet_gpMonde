// Types for Leaflet and Turf.js
/// <reference types="leaflet" />
/// <reference types="turf" />


import * as L from 'leaflet';
import * as turf from '@turf/turf'; 


abstract class Person {
    prenomNom: string;
    adresse: string;
    telephone: string;
    email: string;

    constructor(prenomNom: string, adresse: string, telephone: string, email: string) {
        this.prenomNom = prenomNom;
        this.adresse = adresse;
        this.telephone = telephone;
        this.email = email;
    }
}


class Expediteur extends Person {
    constructor(prenomNom: string, adresse: string, telephone: string, email: string) {
        super(prenomNom, adresse, telephone, email);
    }
}

class Client extends Person {
    constructor(prenomNom: string, adresse: string, telephone: string, email: string) {
        super(prenomNom, adresse, telephone, email);
    }
}


abstract class Product {
    code: string;
    name: string;
    quantite: number;
    poids: number;
    prix: number;
    type: string;
    expediteur: Person;
    receveur: Person;

    constructor(code: string, name: string, quantite: number, poids: number, prix: number, type: string, expediteur: Person, receveur: Person) {
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
    constructor(code: string, name: string, quantite: number, poids: number, prix: number, expediteur: Person, receveur: Person) {
        super(code, name, quantite, poids, prix, "fragile", expediteur, receveur);
    }
}

class IncassableProduct extends Product {
    constructor(code: string, name: string, quantite: number, poids: number, prix: number, expediteur: Person, receveur: Person) {
        super(code, name, quantite, poids, prix, "incassable", expediteur, receveur);
    }
}

class AlimentaireProduct extends Product {
    constructor(code: string, name: string, quantite: number, poids: number, prix: number, expediteur: Person, receveur: Person) {
        super(code, name, quantite, poids, prix, "alimentaire", expediteur, receveur);
    }
}

class ChimiqueProduct extends Product {
    constructor(code: string, name: string, quantite: number, poids: number, prix: number, expediteur: Person, receveur: Person) {
        super(code, name, quantite, poids, prix, "chimique", expediteur, receveur);
    }
}


abstract class Cargo {
    numero: string;
    prix: number;
    lieuDepart: string;
    lieuArrive: string;
    distance: number;
    dateDepart: Date;
    dateArrivee: Date;
    typeProduit: string[];
    poidsMax?: number;
    nbProduitsMax?: number;
    statut: string;
    etat: string;
    produits: Product[];

    constructor(numero: string, prix: number, lieuDepart: string, lieuArrive: string, distance: number, dateDepart: Date, dateArrivee: Date, typeProduit: string[], statut: string, etat: string, poidsMax?: number, nbProduitsMax?: number) {
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

    addProduct(product: Product): void {
        if (this.poidsMax && this.calculateTotalPoids() + product.poids > this.poidsMax) {
            throw new Error("Poids maximum dépassé");
        }
        if (this.nbProduitsMax && this.produits.length + 1 > this.nbProduitsMax) {
            throw new Error("Nombre maximum de produits dépassé");
        }
        this.produits.push(product);
    }

    calculateTotalPoids(): number {
        return this.produits.reduce((total, product) => total + product.poids, 0);
    }
}


class AerienneCargo extends Cargo {
    constructor(numero: string, prix: number, lieuDepart: string, lieuArrive: string, distance: number, dateDepart: Date, dateArrivee: Date, typeProduit: string[], statut: string, etat: string, poidsMax?: number, nbProduitsMax?: number) {
        super(numero, prix, lieuDepart, lieuArrive, distance, dateDepart, dateArrivee, typeProduit, statut, etat, poidsMax, nbProduitsMax);
    }
}

class MaritimeCargo extends Cargo {
    constructor(numero: string, prix: number, lieuDepart: string, lieuArrive: string, distance: number, dateDepart: Date, dateArrivee: Date, typeProduit: string[], statut: string, etat: string, poidsMax?: number, nbProduitsMax?: number) {
        super(numero, prix, lieuDepart, lieuArrive, distance, dateDepart, dateArrivee, typeProduit, statut, etat, poidsMax, nbProduitsMax);
    }
}

class TerrestreCargo extends Cargo {
    constructor(numero: string, prix: number, lieuDepart: string, lieuArrive: string, distance: number, dateDepart: Date, dateArrivee: Date, typeProduit: string[], statut: string, etat: string, poidsMax?: number, nbProduitsMax?: number) {
        super(numero, prix, lieuDepart, lieuArrive, distance, dateDepart, dateArrivee, typeProduit, statut, etat, poidsMax, nbProduitsMax);
    }
}

const cargo = new TerrestreCargo(
    "CGN315",
    51,
    "67, Rue des Plantes, Quartier du Petit-Montrouge, Paris 14e Arrondissement, Paris, Île-de-France, France métropolitaine, 75014, France",
    "11, Rue Quinault, Quartier Necker, Paris 15e Arrondissement, Paris, Île-de-France, France métropolitaine, 75015, France",
    2.52,
    new Date("2015-01-01"),
    new Date("2015-01-01"),
    ["alimentaire", "incassable", "fragile"],
    "en-attente",
    "ferme",
    25,
    25
);
