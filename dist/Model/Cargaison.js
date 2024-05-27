// import { Produit } from "./Produit.js";
class Cargaison {
    idcargo;
    numero;
    poids_max;
    prix_total;
    lieu_depart;
    lieu_arrivee;
    distance_km;
    poids_suporter;
    date_depart;
    date_arrivee;
    nom_cargaison;
    type;
    etat_avancement;
    etat_globale;
    cargaisons = [];
    constructor(idcargo, numero, poids_max, prix_total, lieu_depart, lieu_arrivee, distance_km, type, poids_suporter, date_depart, date_arrivee, nom_cargaison, etat_avancement, etat_globale) {
        this.idcargo = idcargo;
        this.numero = numero;
        this.poids_max = poids_max;
        this.prix_total = prix_total;
        this.lieu_depart = lieu_depart;
        this.lieu_arrivee = lieu_arrivee;
        this.distance_km = distance_km;
        this.poids_suporter = poids_suporter;
        this.date_depart = date_depart;
        this.date_arrivee = date_arrivee;
        this.nom_cargaison = nom_cargaison;
        this.type = type;
        this.etat_avancement = etat_avancement;
        this.etat_globale = etat_globale;
    }
    ajouterCargaison(cargaison) {
        this.cargaisons.unshift(cargaison);
    }
    listerCargaisons() {
        return this.cargaisons;
    }
    filtrerCargaisonsParType(type) {
        return this.cargaisons.filter(cargaison => cargaison.type === type);
    }
}
export { Cargaison };
