// import { Produit } from "./Produit.js";


class Cargaison {
  idcargo: string;
  numero: string;
  poids_max: number;
  prix_total: number;
  lieu_depart: string;
  lieu_arrivee: string;
  distance_km: number;
  poids_suporter: number;
  date_depart: number;
  date_arrivee: number;
  nom_cargaison: string;
  type: string;
  etat_avancement: string;
  etat_globale: string;
  private cargaisons: Cargaison[] = [];

  constructor(
    idcargo: string,
    numero: string,
    poids_max: number,
    prix_total: number,
    lieu_depart: string,
    lieu_arrivee: string,
    distance_km: number,
    type: string,
    poids_suporter: number,
    date_depart: number,
    date_arrivee: number,
    nom_cargaison: string,
    etat_avancement: string,
    etat_globale: string
  ) {
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

  ajouterCargaison(cargaison: Cargaison): void {
    this.cargaisons.unshift(cargaison);
  }

  listerCargaisons(): Cargaison[] {
    return this.cargaisons;
  }

  filtrerCargaisonsParType(type: string): Cargaison[] {
    return this.cargaisons.filter(cargaison => cargaison.type === type);
  }
}

export { Cargaison };

