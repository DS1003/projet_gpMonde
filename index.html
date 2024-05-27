<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion des Cargaisons</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <!-- <link rel="stylesheet" href=".dist/style.css"> -->

    <!-- <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/> -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css">
    <style>
        .sidebar {
            width: 16rem;
            transition: width 0.3s;
        }

        .sidebar {
            width: 24rem;
            transition: width 0.3s;
        }

        .sidebar.reduced {
            width: 4rem;
        }

        .sidebar ul {
            transition: opacity 0.3s;
            overflow: hidden;
        }

        .sidebar.reduced ul {
            opacity: 0;
        }

        .sidebar ul li {
            display: flex;
            align-items: center;
        }

        .sidebar ul li i {
            width: 2rem;
            text-align: center;
        }

        .sidebar ul li span {
            transition: opacity 0.3s;
        }

        .sidebar.reduced ul li span {
            opacity: 0;
            visibility: hidden;
        }

        .main-content {
            transition: margin-left 0.3s;
        }

        .main-content.shifted {
            margin-left: 2rem;
        }

        .main-content.reduced {
            margin-left: 4rem;
        }

        .submenu {
            display: none;
            margin-left: 2rem;
        }

        .submenu li {
            display: flex;
            align-items: center;
        }

        .submenu li i {
            width: 1rem;
            text-align: center;
        }

        /* Style pour les sous-menus */
        .sub-menu {
            display: none;
            list-style-type: none;
            padding: 0;
        }

        /* Style pour afficher les sous-menus lorsque l'élément parent est ouvert */
        .open {
            display: block !important;
        }

        /* Style pour la flèche */
        /* .arrow {
    margin-left: 5px;
}

.rotate {
    transform: rotate(180deg);
} */

        /* Style pour les sous-menus */
        .sub-menu {
            display: none;
            list-style-type: none;
            padding: 0;
            position: absolute;
        }

        .dropdown-bottom {
            bottom: 530px;
            left: 110px;
        }



        /* map */
        #map {
            height: 400px;
            /* ou une hauteur appropriée selon vos besoins */
            width: 40%;
        }

        .modal-content {
            display: flex;
            flex-direction: row;
            width: 50%;
        }

        .modal-content>div {
            flex: 1;
        }
    </style>
</head>

<body class="bg-gray-100">
    <header id="nav" class=" bg-purple-800 text-white p-4 flex justify-between items-center shadow-lg">
        <img src="/img/Gold_and_Black_Plane_Travel_Creative_Logo__1_-removebg-preview.png" alt="Logo" class="mb-4 h-full w-20 mr-2">
        <h1 class="text-2xl font-bold">Gestion des Cargaisons</h1>
        <input type="text" placeholder="Rechercher..." class="p-2 w-2/12 rounded-full border-2 text-black">
    </header>

    <div class="flex w-scren ">


        <aside id="sidebar" class="sidebar bg-purple-600 text-white hidden lg:block h-screen">
            <div class="p-4">
                
                <h2 class="text-xl text-center font-bold mb-4 text-white-200">Menu</h2>
                <nav>
                    <ul>
                        <li class="mb-2 flex items-center btn-add">
                            <i class="fa-solid fa-cube" style="color: #ffffff;"></i>
                            <a href="#" class="block p-2 ml-2">
                                <button id="btn-add" class=" text-white">Ajouter </button>
                            </a>
                        </li>

                        <li class="mb-2 flex items-center btn-add">
                            <i class="fa-solid fa-list" style="color: #ffffff;"></i>
                            <a href="#" class="block p-2 ml-2">
                                <button id="btn-list" class=" text-white">Liste Cargaisons </button>
                            </a>
                        </li>
                        <li class="mb-2 flex items-center">
                            <i class="fas fa-ship w-6"></i>
                            <a href="#" class="block p-2 ml-2" id="toggle-cargaisons">Gestion Cargaisons <span class="arrow">&#9660;</span></a>
                            <ul class="ml-8 sub-menu dropdown-bottom" id="cargaisons-menu">
                                <li><a href="#">
                                        <button id="btn-filter-maritime" class="mt-5">
                                            Filtre-maritime</a></li>
                                </button>
                                <li><a href="#">
                                        <button id="btn-filter-aerienne">
                                            Filtre-aériénne
                                        </button></a></li>
                                <li><a href="#">
                                        <button id="btn-filter-routiere">
                                            Filtre-routiére</button></a></li>
                            </ul>
                        </li>
                        <li class="mb-2 flex items-center">
                            <i class="fas fa-box-open w-6"></i>
                            <a href="#" class="block p-2 ml-2">Produits</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>




        <main id="main-content" class="main-content flex-grow w-full p-8 shifted">
            <div class="container mx-auto">
                <h1 class="text-2xl font-bold mb-4">Liste des Cargaisons</h1>

                <div id="output" class="bg-white p-4 rounded shadow">
                    <table class="min-w-full divide-y divide-gray-200 table">
                        <thead class="bg-gray-100">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Numero</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date Départ</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date Arrivee</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Lieu Départ</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Lieu Arrivé</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Distance</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action</th>
                            </tr>
                        </thead>
                        <tbody id="cargaison-list" class="bg-white divide-y divide-gray-200">
                            <!-- Liste des cargaison -->

                        </tbody>
                    </table>

                    <div class="pagination">
                        <button id="prev-page" class="bg-blue-500 text-white px-2 py-1 rounded" type="button">Précédent</button>
                        <span id="page-info" class="mx-2"></span>
                        <button id="next-page" class="bg-blue-500 text-white px-2 py-1 rounded" type="button">Suivant</button>
                    </div>
                </div>
            </div>
        </main>
    </div>



    <div id="modal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center hidden">
        <div class="bg-white p-8 rounded-lg shadow-lg modal-content">
            <div class="pr-4">
                <h2 class="text-xl font-bold mb-4">Ajouter une cargaison</h2>
                <form id="form-add-cargaison">
                    <input type="hidden" class="form-control" id="produit-id">
                    <div class="mb-4 flex">
                        <div class="flex-1 mr-4">
                            <label for="type-cargaison" class="block text-sm font-medium text-gray-700">Type de cargaison</label>
                            <select id="type-cargaison" class="mt-1 block w-full p-2 border border-gray-300 rounded">
                                <option value="CargaisonMaritime">Maritime</option>
                                <option value="CargaisonAérienne">Aérienne</option>
                                <option value="CargaisonRoutière">Routière</option>
                            </select>
                            <span class="text-red-500 text-sm hidden" id="type-cargaison-error">Type de cargaison est obligatoire</span>
                        </div>
                        <div class="flex-1 ml-4">
                            <label for="nom-cargaison" class="block text-sm font-medium text-gray-700">Nom Cargaison</label>
                            <input type="text" id="nom-cargaison" class="mt-1 block w-full p-2 border border-gray-300 rounded">
                            <span class="text-red-500 text-sm hidden" id="nom-cargaison-error">Nom de cargaison est obligatoire</span>
                        </div>
                    </div>
                    <div class="mb-4 flex">
                        <div class="flex-1 mr-4">
                            <label class="block text-sm font-medium text-gray-700" for="poids-suporter">Poids supporter</label>
                            <select class="mt-1 block w-full p-2 border border-gray-300 rounded" id="poids-suporter">
                                <option value="poids">Poids</option>
                                <option value="nombre">Nombre de cargaison</option>
                            </select>
                            <span class="text-red-500 text-sm hidden" id="poids-suporter-error">Poids supporter est obligatoire</span>
                        </div>
                        <div class="flex-1 ml-4">
                            <label class="block text-sm font-medium text-gray-700" for="valeur">Valeur</label>
                            <input class="mt-1 block w-full p-2 border border-gray-300 rounded" type="text" id="valeur" placeholder="">
                            <span class="text-red-500 text-sm hidden" id="valeur-error">Valeur est obligatoire</span>
                        </div>
                    </div>
                    <div class="mb-4 flex">
                        <div class="flex-1 mr-4">
                            <label for="date-depart" class="block text-sm font-medium text-gray-700">Date départ</label>
                            <input type="date" id="date-depart" class="mt-1 block w-full p-2 border border-gray-300 rounded">
                            <span class="text-red-500 text-sm hidden" id="date-depart-error">Date de départ est obligatoire</span>
                        </div>
                        <div class="flex-1 ml-4">
                            <label for="date-arrivee" class="block text-sm font-medium text-gray-700">Date Arrivée</label>
                            <input type="date" id="date-arrivee" class="mt-1 block w-full p-2 border border-gray-300 rounded">
                            <span class="text-red-500 text-sm hidden" id="date-arrivee-error">Date d'arrivée est obligatoire</span>
                        </div>
                    </div>
                    <div class="mb-4 flex">
                        <div class="flex-1 mr-4">
                            <label for="depart" class="block text-sm font-medium text-gray-700">Lieu Départ</label>
                            <input type="text" id="depart" class="mt-1 block w-full p-2 border border-gray-300 rounded" readonly>
                            <span class="text-red-500 text-sm hidden" id="depart-error">Lieu de départ est obligatoire</span>
                        </div>
                        <div class="flex-1 ml-4">
                            <label for="arrivee" class="block text-sm font-medium text-gray-700">Lieu Arrivée</label>
                            <input type="text" id="arrivee" class="mt-1 block w-full p-2 border border-gray-300 rounded" readonly>
                            <span class="text-red-500 text-sm hidden" id="arrivee-error">Lieu d'arrivée est obligatoire</span>
                        </div>
                    </div>
                    <div class="mb-4 flex">
                        <div class="flex-1 mr-4">
                            <label for="distance" class="block text-sm font-medium text-gray-700">Distance</label>
                            <input type="number" id="distance" class="mt-1 block w-full p-2 border border-gray-300 rounded" readonly>
                            <span class="text-red-500 text-sm hidden" id="distance-error">Distance est obligatoire</span>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <button type="button" id="btn-close-modal" class="bg-gray-500 text-white px-4 py-2 rounded mr-2">Annuler</button>
                        <button id="ajouter" type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Ajouter</button>
                    </div>
                </form>
            </div>
            <div id="map"></div>
        </div>
    </div>


    <script type="module" src="dist/test.js"></script>

    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

    <script>
        let map, departMarker, arriveeMarker;

        map = L.map("map").setView([0, 0], 2);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 18,
        }).addTo(map);

        map.on("click", function(e) {
            if (!departMarker) {
                departMarker = L.marker(e.latlng, {
                        draggable: true
                    }).addTo(map)
                    .bindPopup("Lieu de départ")
                    .openPopup();
                updateInputWithLocationName(e.latlng, "depart");

                departMarker.on('dragend', function(event) {
                    let marker = event.target;
                    let position = marker.getLatLng();
                    updateInputWithLocationName(position, "depart");
                    if (arriveeMarker) {
                        calculateDistance(position, arriveeMarker.getLatLng());
                    }
                });

            } else if (!arriveeMarker) {
                arriveeMarker = L.marker(e.latlng, {
                        draggable: true
                    }).addTo(map)
                    .bindPopup("Lieu d'arrivée")
                    .openPopup();
                updateInputWithLocationName(e.latlng, "arrivee");
                calculateDistance(departMarker.getLatLng(), e.latlng);

                arriveeMarker.on('dragend', function(event) {
                    let marker = event.target;
                    let position = marker.getLatLng();
                    updateInputWithLocationName(position, "arrivee");
                    calculateDistance(departMarker.getLatLng(), position);
                });
            } else {
                arriveeMarker.setLatLng(e.latlng);
                updateInputWithLocationName(e.latlng, "arrivee");
                calculateDistance(departMarker.getLatLng(), e.latlng);
            }
        });

        function updateInputWithLocationName(latlng, inputId) {
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latlng.lat}&lon=${latlng.lng}`)
                .then(response => response.json())
                .then(data => {
                    if (inputId === "depart") {
                        const country = data.address.country || `${latlng.lat}, ${latlng.lng}`;
                        document.getElementById(inputId).value = country;
                    } else if (inputId === "arrivee") {
                        const country = data.address.country || `${latlng.lat}, ${latlng.lng}`;
                        document.getElementById(inputId).value = country;
                    }
                })
                .catch(error => {
                    console.error('Error fetching location name:', error);
                    document.getElementById(inputId).value = `${latlng.lat}, ${latlng.lng}`;
                });
        }


        function calculateDistance(start, end) {
            const lat1 = start.lat;
            const lon1 = start.lng;
            const lat2 = end.lat;
            const lon2 = end.lng;

            const R = 6371; // Radius of the Earth in km
            const dLat = ((lat2 - lat1) * Math.PI) / 180;
            const dLon = ((lon2 - lon1) * Math.PI) / 180;
            const a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos((lat1 * Math.PI) / 180) *
                Math.cos((lat2 * Math.PI) / 180) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = R * c;

            document.getElementById("distance").value = distance.toFixed(2);
        }

        const choixSelect = document.getElementById("poids-suporter");
        const champSaisi = document.getElementById("champ-saisi");
        const labelValeur = document.querySelector("#champ-saisi label");
        const inputValeur = document.getElementById("valeur");

        choixSelect.addEventListener("change", function() {
            if (this.value === "poids") {
                champSaisi.classList.remove("hidden");
                labelValeur.textContent = "Poids maximal";
                inputValeur.placeholder = "Entrez le poids maximal";
            } else if (this.value === "nombre") {
                champSaisi.classList.remove("hidden");
                labelValeur.textContent = "Nombre maximal de produits";
                inputValeur.placeholder = "Entrez le nombre maximal de produits";
            } else {
                champSaisi.classList.add("hidden");
            }
        });

        // Invalidate the map size to ensure it renders correctly
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    </script>
</body>

</html>