
import { Console } from 'console';
// import { Cargaison } from './Model/Cargaison.js';


// Fonction pour afficher les détails d'une cargaison (vide pour le moment)
function afficherDetailsCargaison(cargaisonId: string | null): void {
  console.log('Afficher les détails pour la cargaison:', cargaisonId);
}


interface Cargaison {
  idcargo: string;
  numero: string;
  date_depart: string;
  date_arrivee: string;
  lieu_depart: string;
  lieu_arrivee: string;
  distance_km: string;
}
let currentPage = 1;
const itemsPerPage = 5;
let totalPages = 1;

function afficherCargaisons(page: number = currentPage): void {
  fetch('cargaisons.json')
    .then(response => response.json())
    .then(data => {
      const cargaisons: Cargaison[] = data.cargaisons;
      const cargaisonList = document.getElementById('cargaison-list');
      if (!cargaisonList) return;

      totalPages = Math.ceil(cargaisons.length / itemsPerPage);
      currentPage = page;

      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const paginatedCargaisons = cargaisons.slice(start, end);

      cargaisonList.innerHTML = '';
      paginatedCargaisons.forEach(cargaison => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cargaison.numero}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cargaison.date_depart}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cargaison.date_arrivee}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cargaison.lieu_depart}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cargaison.lieu_arrivee}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cargaison.distance_km}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><button class="bg-blue-500 text-white px-1 py-1 rounded btn-view" type="button" data-id="${cargaison.idcargo}">voir</button></td>
        `;
        cargaisonList.appendChild(row);
      });

      // Mise à jour des événements des boutons "voir"
      document.querySelectorAll('.btn-view').forEach(button => {
        button.addEventListener('click', (event) => {
          const target = event.target as HTMLElement;
          const cargaisonId = target.getAttribute('data-id');
          afficherDetailsCargaison(cargaisonId);
        });
      });

      // Mise à jour des informations de pagination
      const pageInfo = document.getElementById('page-info');
      if (pageInfo) {
        pageInfo.textContent = `Page ${currentPage} sur ${totalPages}`;
      }

      // Activer/désactiver les boutons de pagination
      const prevButton = document.getElementById('prev-page') as HTMLButtonElement;
      const nextButton = document.getElementById('next-page') as HTMLButtonElement;
      if (prevButton) {
        prevButton.disabled = currentPage === 1;
      }
      if (nextButton) {
        nextButton.disabled = currentPage === totalPages;
      }
    })
    .catch(error => console.error('Erreur:', error));
}

document.getElementById('prev-page')?.addEventListener('click', () => {
  if (currentPage > 1) {
    afficherCargaisons(currentPage - 1);
  }
});

document.getElementById('next-page')?.addEventListener('click', () => {
  if (currentPage < totalPages) {
    afficherCargaisons(currentPage + 1);
  }
});

document.getElementById('btn-list')?.addEventListener('click', () => {
  afficherCargaisons(1);
});

// Appel initial pour afficher les cargaisons existantes
afficherCargaisons();




/* // // validation du formulaire***************************
document.getElementById('ajouter')?.addEventListener('click', function(event: Event) {
  // Empêche la soumission du formulaire par défaut
  event.preventDefault();

  // Récupère les champs du formulaire
  const typeCargaison = document.getElementById('type-cargaison') as HTMLSelectElement;
  const nomCargaison = document.getElementById('nom-cargaison') as HTMLInputElement;
  const poidsSuporter = document.getElementById('poids-suporter') as HTMLSelectElement;
  const valeur = document.getElementById('valeur') as HTMLInputElement;
  const dateDepart = document.getElementById('date-depart') as HTMLInputElement;
  const dateArrivee = document.getElementById('date-arrivee') as HTMLInputElement;
  const depart = document.getElementById('depart') as HTMLInputElement;
  const arrivee = document.getElementById('arrivee') as HTMLInputElement;
  const distance = document.getElementById('distance') as HTMLInputElement;

  // Récupère les éléments d'erreur
  const typeCargaisonError = document.getElementById('type-cargaison-error') as HTMLSpanElement;
  const nomCargaisonError = document.getElementById('nom-cargaison-error') as HTMLSpanElement;
  const poidsSuporterError = document.getElementById('poids-suporter-error') as HTMLSpanElement;
  const valeurError = document.getElementById('valeur-error') as HTMLSpanElement;
  const dateDepartError = document.getElementById('date-depart-error') as HTMLSpanElement;
  const dateArriveeError = document.getElementById('date-arrivee-error') as HTMLSpanElement;
  const departError = document.getElementById('depart-error') as HTMLSpanElement;
  const arriveeError = document.getElementById('arrivee-error') as HTMLSpanElement;
  const distanceError = document.getElementById('distance-error') as HTMLSpanElement;

  // Initialise une variable pour suivre si le formulaire est valide
  let formIsValid = true;

  // Fonction pour vérifier un champ et afficher/masquer les messages d'erreur
  function validateField(field: HTMLInputElement | HTMLSelectElement, errorElement: HTMLElement) {
    if (field.value.trim() === '') {
      errorElement.classList.remove('hidden');
      formIsValid = false;
    } else {
      errorElement.classList.add('hidden');
    }
  }

  // Valide chaque champ
  validateField(typeCargaison, typeCargaisonError);
  validateField(nomCargaison, nomCargaisonError);
  validateField(poidsSuporter, poidsSuporterError);
  validateField(valeur, valeurError);
  validateField(dateDepart, dateDepartError);
  validateField(dateArrivee, dateArriveeError);
  validateField(depart, departError);
  validateField(arrivee, arriveeError);
  validateField(distance, distanceError);

  // Si le formulaire est valide, envoie les données dans le fichier JSON
  if (formIsValid) {
    const formData = new FormData();
    formData.append('action', 'addCargaison');
    formData.append('type_cargaison', typeCargaison.value);
    formData.append('nom_cargaison', nomCargaison.value);
    formData.append('poids_suporter', poidsSuporter.value);
    formData.append('valeur', valeur.value);
    formData.append('date_depart', dateDepart.value);
    formData.append('date_arrivee', dateArrivee.value);
    formData.append('depart', depart.value);
    formData.append('arrivee', arrivee.value);
    formData.append('distance', distance.value);

    fetch('api.php', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === "success") {
          alert(data.message);
          afficherCargaisons();  // Rafraîchir le tableau après ajout
          const modal = document.getElementById('modal');
          if (modal) modal.classList.add('hidden');
        } else {
          alert('Erreur lors de l\'ajout de la cargaison');
        }
      })
      .catch(error => console.error('Erreur:', error));
  }
}); */




// ouvrir le modal
document.getElementById('btn-add')?.addEventListener('click', () => {
  const modal = document.getElementById('modal');
  if (modal) modal.classList.remove('hidden');
});
document.getElementById('btn-close-modal')?.addEventListener('click', () => {
  const modal = document.getElementById('modal');
  if (modal) modal.classList.add('hidden');
});



// ajouter dans le fichier json
document.getElementById('form-add-cargaison')?.addEventListener('submit', (event) => {
  event.preventDefault();

  const numero = "CRG" + Math.floor(Math.random() * 1000);
  const typeCargaison = (document.getElementById('type-cargaison') as HTMLSelectElement).value.trim();
  const nom_cargaison = (document.getElementById('nom-cargaison') as HTMLInputElement).value.trim();
  const poids_suporter = (document.getElementById('poids-suporter') as HTMLSelectElement).value.trim();
  const date_depart = (document.getElementById('date-depart') as HTMLInputElement).value.trim();
  const date_arrivee = (document.getElementById('date-arrivee') as HTMLInputElement).value.trim();
  const lieu_depart = (document.getElementById('depart') as HTMLInputElement).value.trim();
  const lieu_arrivee = (document.getElementById('arrivee') as HTMLInputElement).value.trim();
  const distance_km = (document.getElementById('distance') as HTMLInputElement).value.trim();
  const etat_avancement = "en cours";
  const etat_globale = "ouvert";

  const formData = new FormData();
  formData.append('action', 'addCargaison');
  formData.append('numero', numero);
  formData.append('lieu_depart', lieu_depart);
  formData.append('lieu_arrivee', lieu_arrivee);
  formData.append('distance_km', distance_km);
  formData.append('type', typeCargaison);
  formData.append('etat_avancement', etat_avancement);
  formData.append('etat_globale', etat_globale);
  formData.append('poids_suporter', poids_suporter);
  formData.append('date_depart', date_depart);
  formData.append('date_arrivee', date_arrivee);
  formData.append('nom_cargaison', nom_cargaison);

  fetch('api.php', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      if (data.status === "success") {
        alert(data.message);
        afficherCargaisons();  // Rafraîchir le tableau après ajout
        const modal = document.getElementById('modal');
        if (modal) modal.classList.add('hidden');
      } else {
        alert('Erreur lors de l\'ajout de la cargaison');
      }
    })
    .catch(error => console.error('Erreur:', error));
});



  


