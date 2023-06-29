//CLASSE
//Classe Pays
class Pays {
    constructor(nom, population, superficie, densite) {
        this.nom = nom;
        this.superficie = superficie;
        this.population = population;
        this.densite = densite;
    }
}


//FONCTION
//Mélanger un tableau
function melangerTableau(tableau) {
    for (let i = tableau.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
    }
    return tableau;
}

//Bon affichage des nombres
const options = {
    style: 'decimal',
    useGrouping: true,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    minimumIntegerDigits: 1,
};

//Gérer le meilleur score
function updateScore(score) {
    var meilleurScore = localStorage.getItem('highscoreDen');

    if (score > meilleurScore) {
        localStorage.setItem('highscoreDen', score);
    }
}

//Recherche du meilleur score
function meilleurScore() {
    var meilleurScore = localStorage.getItem('highscoreDen');
    var ret;

    if (meilleurScore !== null) {
        ret=localStorage.getItem('highscoreDen');
    } else {
        ret=0;
    }

    return ret;
}

//Ajouter les drapeaux
function ajouterDrapeau(paysA, paysB){
    drapA.setAttribute('src', 'images/'+paysA.nom+'.png');
    drapB.setAttribute('src', 'images/'+paysB.nom+'.png');
}

//DONNEES
//Création du tableau des pays
var tableauPays;
function creaTab() {
    tableauPays = [];
    tableauPays.push(new Pays("Chine", 1367.82, 9596961, 142.53));
    tableauPays.push(new Pays("Inde", 1274.24, 3287263, 387.63));
    tableauPays.push(new Pays("Etats-Unis", 322.78, 9629047, 33.52));
    tableauPays.push(new Pays("Indonésie", 255.46, 1910931, 133.68));
    tableauPays.push(new Pays("Brésil", 203.89, 8547877, 23.85));
    tableauPays.push(new Pays("Pakistan", 191.54, 796096, 240.60));
    tableauPays.push(new Pays("Nigéria", 187.38, 923768, 202.84));
    tableauPays.push(new Pays("Bangladesh", 155.58, 147570, 1054.25));
    tableauPays.push(new Pays("Russie", 146.27, 17125402, 8.54));
    tableauPays.push(new Pays("Japon", 126.89, 377962, 335.72));
    tableauPays.push(new Pays("Mexique", 118.76, 1959248, 60.62));
    tableauPays.push(new Pays("Philippines", 100.02, 300439, 332.91));
    tableauPays.push(new Pays("Ethiopie", 90.08, 1132308, 79.55));
    tableauPays.push(new Pays("Viêt Nam", 89.71, 330972, 271.05));
    tableauPays.push(new Pays("Egypte", 88.03, 1001449, 87.91));
    tableauPays.push(new Pays("Allemagne", 81.83, 357340, 229.00));
    tableauPays.push(new Pays("Iran", 78.77, 1648195, 47.79));
    tableauPays.push(new Pays("Turquie", 77.70, 769630, 100.95));
    tableauPays.push(new Pays("République démocratique du Congo", 77.43, 2344858, 33.02));
    tableauPays.push(new Pays("Thaïlande", 67.50, 513120, 131.54));
    tableauPays.push(new Pays("France", 66.63, 551695, 116.94));
    tableauPays.push(new Pays("Royaume-Uni", 64.60, 242509, 266.37));
    tableauPays.push(new Pays("Italie", 60.81, 302072, 201.31));
    tableauPays.push(new Pays("Afrique du Sud", 52.98, 1219912, 43.43));
    tableauPays.push(new Pays("Birmanie", 51.42, 676578, 76.00));
    tableauPays.push(new Pays("Corée du Sud", 50.22, 99828, 503.06));
    tableauPays.push(new Pays("Tanzanie", 48.71, 945088, 51.54));
    tableauPays.push(new Pays("Colombie", 47.45, 1141748, 41.56));
    tableauPays.push(new Pays("Espagne", 46.44, 505992, 91.78));
    tableauPays.push(new Pays("Argentine", 43.13, 2791810, 15.45));
    tableauPays.push(new Pays("Ukraine", 42.93, 576468, 74.47));
    tableauPays.push(new Pays("Kenya", 41.35, 581787, 71.08));
    tableauPays.push(new Pays("Algérie", 39.53, 2381741, 16.60));
    tableauPays.push(new Pays("Pologne", 38.51, 312685, 123.16));
    tableauPays.push(new Pays("Irak", 37.40, 435052, 85.97));
    tableauPays.push(new Pays("Soudan", 36.16, 1886068, 19.17));
    tableauPays.push(new Pays("Canada", 35.99, 9984670, 3.60));
    tableauPays.push(new Pays("Ouganda", 34.76, 241551, 143.90));
    tableauPays.push(new Pays("Maroc", 33.85, 446550, 75.80));
    tableauPays.push(new Pays("Pérou", 30.81, 1285220, 23.98));
    tableauPays.push(new Pays("Arabie Saoudite", 30.77, 2149690, 14.31));
    tableauPays.push(new Pays("Venezuela", 30.21, 916445, 32.96));
    tableauPays.push(new Pays("Malaisie", 30.06, 330803, 90.87));
    tableauPays.push(new Pays("Ouzbékistan", 29.99, 448900, 66.82));
    tableauPays.push(new Pays("Népal", 27.95, 147181, 189.93));
    tableauPays.push(new Pays("Ghana", 27.11, 238553, 113.65));
    tableauPays.push(new Pays("Yémen", 26.56, 527970, 50.30));
    tableauPays.push(new Pays("Afghanistan", 26.56, 652864, 40.68));
    tableauPays.push(new Pays("Corée du Nord", 24.87, 120538, 206.33));
    tableauPays.push(new Pays("Angola", 24.38, 1246700, 19.56));
    tableauPays.push(new Pays("Mozambique", 24.10, 801590, 30.06));
    tableauPays.push(new Pays("Australie", 24.00, 7687809, 3.13));
    tableauPays.push(new Pays("Taïwan", 23.37, 36191, 645.84));
    tableauPays.push(new Pays("Côte d'Ivoire", 23.26, 322462, 72.13));
    tableauPays.push(new Pays("Madagascar", 23.05, 587295, 39.24));
    tableauPays.push(new Pays("Cameroun", 22.18, 475650, 46.63));
    tableauPays.push(new Pays("Sri Lanka", 20.68, 65610, 315.13));
    tableauPays.push(new Pays("Roumanie", 19.78, 238391, 82.97));
    tableauPays.push(new Pays("Niger", 19.22, 1267000, 15.17));
    tableauPays.push(new Pays("Burkina Faso", 18.45, 274222, 67.28));
    tableauPays.push(new Pays("Mali", 17.96, 1242248, 14.46));
    tableauPays.push(new Pays("Syrie", 17.95, 185180, 96.94));
    tableauPays.push(new Pays("Kazakhstan", 17.44, 2717300, 6.42));
    tableauPays.push(new Pays("Chili", 16.80, 756950, 22.19));
    tableauPays.push(new Pays("Pays-Bas", 16.79, 41542, 404.20));
    tableauPays.push(new Pays("Equateur", 15.93, 248360, 64.12));
    tableauPays.push(new Pays("Guatemala", 15.44, 109117, 141.48));
    tableauPays.push(new Pays("Malawi", 15.32, 118484, 129.27));
    tableauPays.push(new Pays("Cambodge", 15.24, 181035, 84.20));
    tableauPays.push(new Pays("Zambie", 14.87, 752612, 19.76));
    tableauPays.push(new Pays("Sénégal", 14.35, 196712, 72.97));
    tableauPays.push(new Pays("Zimbabwe", 13.06, 390757, 33.43));
    tableauPays.push(new Pays("Tchad", 12.24, 1284200, 9.53));
    tableauPays.push(new Pays("Cuba", 11.24, 109884, 102.27));
    tableauPays.push(new Pays("Bolivie", 11.22, 1098581, 10.21));
    tableauPays.push(new Pays("Belgique", 11.21, 30526, 367.20));
    tableauPays.push(new Pays("Rwanda", 11.08, 25283, 438.16));
    tableauPays.push(new Pays("Tunisie", 10.98, 162155, 67.73));
    tableauPays.push(new Pays("Haïti", 10.91, 27748, 393.25));
    tableauPays.push(new Pays("Grèce", 10.78, 131957, 81.66));
    tableauPays.push(new Pays("Guinée", 10.63, 245857, 43.23));
    tableauPays.push(new Pays("Soudan du Sud", 10.63, 644329, 16.49));
    tableauPays.push(new Pays("République Tchèque", 10.54, 78866, 133.62));
    tableauPays.push(new Pays("Somalie", 10.43, 287547, 36.27));
    tableauPays.push(new Pays("Portugal", 10.43, 92225, 113.06));
    tableauPays.push(new Pays("République Dominicaine", 10.38, 48734, 212.96));
    tableauPays.push(new Pays("Bénin", 10.32, 114763, 89.88));
    tableauPays.push(new Pays("Hongrie", 9.91, 93030, 106.51));
    tableauPays.push(new Pays("Burundi", 9.66, 27834, 347.10));
    tableauPays.push(new Pays("Suède", 9.64, 449964, 21.42));
    tableauPays.push(new Pays("Biélorussie", 9.47, 207600, 45.61));
    tableauPays.push(new Pays("Azerbaïdjan", 9.24, 86600, 106.64));
    tableauPays.push(new Pays("Emirats Arabes Unis", 8.98, 82880, 108.38));
    tableauPays.push(new Pays("Autriche", 8.51, 83858, 101.45));
    tableauPays.push(new Pays("Honduras", 8.45, 112492, 75.10));
    tableauPays.push(new Pays("Tadjikistan", 8.35, 143100, 58.36));
    tableauPays.push(new Pays("Israël", 8.33, 20517, 406.20));
    tableauPays.push(new Pays("Suisse", 8.24, 41285, 199.51));
    tableauPays.push(new Pays("Jordanie", 7.50, 88794, 84.49));
    tableauPays.push(new Pays("Bulgarie", 7.35, 110912, 66.28));
    tableauPays.push(new Pays("Serbie", 7.02, 77474, 90.63));
    tableauPays.push(new Pays("Paraguay", 7.01, 406752, 17.24));
    tableauPays.push(new Pays("Laos", 6.78, 236800, 28.64));
    tableauPays.push(new Pays("Togo", 6.73, 56785, 118.58));
    tableauPays.push(new Pays("Papouasie-Nouvelle-Guinée", 6.55, 462840, 14.16));
    tableauPays.push(new Pays("Sierra Leone", 6.42, 71740, 89.44));
    tableauPays.push(new Pays("Erythrée", 6.38, 121320, 52.59));
    tableauPays.push(new Pays("Salvador", 6.33, 20742, 305.09));
    tableauPays.push(new Pays("Nicaragua", 6.07, 129495, 46.88));
    tableauPays.push(new Pays("Libye", 6.00, 1759754, 3.41));
    tableauPays.push(new Pays("Kirghizistan", 5.78, 199900, 27.56));
    tableauPays.push(new Pays("Turkménistan", 5.59, 491210, 11.38));
    tableauPays.push(new Pays("Danemark", 5.57, 43098, 129.17));
    tableauPays.push(new Pays("Singapour", 5.47, 718, 7614.82));
    tableauPays.push(new Pays("Finlande", 5.45, 303891, 17.94));
    tableauPays.push(new Pays("Slovaquie", 5.40, 49036, 110.21));
    tableauPays.push(new Pays("République Centrafricaine", 5.17, 622984, 8.29));
    tableauPays.push(new Pays("Norvège", 5.11, 385178, 13.26));
    tableauPays.push(new Pays("Costa Rica", 4.77, 51100, 93.41));
    tableauPays.push(new Pays("Irlande", 4.61, 70282, 65.59));
    tableauPays.push(new Pays("Congo", 4.55, 341821, 21.42));
    tableauPays.push(new Pays("Géorgie", 4.48, 69700, 64.33));
    tableauPays.push(new Pays("Palestine", 4.42, 6020, 734.31));
    tableauPays.push(new Pays("Croatie", 4.24, 56594, 74.96));
    tableauPays.push(new Pays("Nouvelle-Zélande", 4.24, 268680, 15.79));
    tableauPays.push(new Pays("Oman", 4.18, 309550, 13.50));
    tableauPays.push(new Pays("Liban", 4.14, 10452, 396.39));
    tableauPays.push(new Pays("Libéria", 4.10, 111370, 36.80));
    tableauPays.push(new Pays("Panama", 3.91, 75320, 51.96));
    tableauPays.push(new Pays("Bosnie-Herzégovine", 3.79, 51209, 74.04));
    tableauPays.push(new Pays("Koweït", 3.64, 17818, 204.05));
    tableauPays.push(new Pays("Moldavie", 3.56, 33845, 127.66));
    tableauPays.push(new Pays("Mauritanie", 3.54, 1030700, 3.43));
    tableauPays.push(new Pays("Uruguay", 3.47, 176215, 19.68));
    tableauPays.push(new Pays("Mongolie", 3.03, 1564116, 1.93));
    tableauPays.push(new Pays("Arménie", 3.01, 29743, 101.05));
    tableauPays.push(new Pays("Lituanie", 2.94, 65303, 45.05));
    tableauPays.push(new Pays("Albanie", 2.89, 28748, 100.63));
    tableauPays.push(new Pays("Jamaïque", 2.71, 11425, 237.33));
    tableauPays.push(new Pays("Bhoutan", 2.63, 38394, 68.38));
    tableauPays.push(new Pays("Namibie", 2.25, 824116, 2.73));
    tableauPays.push(new Pays("Qatar", 2.22, 11586, 192.01));
    tableauPays.push(new Pays("Botswana", 2.16, 581730, 3.71));
    tableauPays.push(new Pays("Macédoine", 2.06, 25713, 80.30));
    tableauPays.push(new Pays("Slovénie", 2.06, 20273, 101.58));
    tableauPays.push(new Pays("Lettonie", 2.03, 64589, 31.40));
    tableauPays.push(new Pays("Gambie", 2.01, 10689, 187.93));
    tableauPays.push(new Pays("Lesotho", 1.92, 30355, 63.40));
    tableauPays.push(new Pays("Guinée Equatoriale", 1.86, 28051, 66.38));
    tableauPays.push(new Pays("Kosovo", 1.83, 10906, 167.41));
    tableauPays.push(new Pays("Gabon", 1.80, 267667, 6.73));
    tableauPays.push(new Pays("Guinée-Bissau", 1.63, 36125, 45.08));
    tableauPays.push(new Pays("Eswatini", 1.43, 17360, 82.25));
    tableauPays.push(new Pays("Trinité-et-Tobago", 1.35, 5128, 262.64));
    tableauPays.push(new Pays("Bahreïn", 1.35, 770, 1748.50));
    tableauPays.push(new Pays("Estonie", 1.32, 45228, 29.09));
    tableauPays.push(new Pays("Maurice", 1.22, 2040, 597.68));
    tableauPays.push(new Pays("Timor Oriental", 1.20, 14874, 80.76));
    tableauPays.push(new Pays("Chypre", 1.17, 9251, 126.74));
    tableauPays.push(new Pays("Djibouti", 0.93, 23200, 40.14));
    tableauPays.push(new Pays("Fidji", 0.90, 18274, 49.43));
    tableauPays.push(new Pays("Guyana", 0.79, 214970, 3.68));
    tableauPays.push(new Pays("Comores", 0.77, 1862, 411.85));
    tableauPays.push(new Pays("Monténégro", 0.61, 13812, 44.24));
    tableauPays.push(new Pays("Iles Salomon", 0.60, 28896, 20.84));
    tableauPays.push(new Pays("Suriname", 0.57, 163821, 3.46));
    tableauPays.push(new Pays("Luxembourg", 0.56, 2586, 217.69));
    tableauPays.push(new Pays("Cap-Vert", 0.52, 4033, 129.46));
    tableauPays.push(new Pays("Malte", 0.43, 316, 1371.85));
    tableauPays.push(new Pays("Brunei", 0.42, 5765, 73.08));
    tableauPays.push(new Pays("Belize", 0.37, 22966, 16.04));
    tableauPays.push(new Pays("Maldives", 0.34, 298, 1128.27));
    tableauPays.push(new Pays("Islande", 0.33, 103125, 3.19));
    tableauPays.push(new Pays("Bahamas", 0.31, 13962, 22.14));
    tableauPays.push(new Pays("Barbade", 0.28, 430, 657.15));
    tableauPays.push(new Pays("Vanuatu", 0.28, 12281, 22.56));
    tableauPays.push(new Pays("Sao Tomé-et-Principe", 0.20, 1001, 199.65));
    tableauPays.push(new Pays("Samoa", 0.19, 2830, 67.87));
    tableauPays.push(new Pays("Sainte-Lucie", 0.18, 620, 280.27));
    tableauPays.push(new Pays("Kiribati", 0.11, 811, 138.08));
    tableauPays.push(new Pays("Grenade", 0.11, 350, 314.72));
    tableauPays.push(new Pays("Micronésie", 0.11, 702, 152.64));
    tableauPays.push(new Pays("Saint-Vincent-et-les-Grenadines", 0.10, 389, 267.91));
    tableauPays.push(new Pays("Tonga", 0.10, 749, 138.68));
    tableauPays.push(new Pays("Antigua-et-Barbuda", 0.09, 442, 157.20));
    tableauPays.push(new Pays("Seychelles", 0.09, 455, 192.18));
    tableauPays.push(new Pays("Andorre", 0.09, 468, 183.45));
    tableauPays.push(new Pays("Dominique", 0.07, 754, 96.57));
    tableauPays.push(new Pays("Iles Marshall", 0.05, 181, 297.05));
    tableauPays.push(new Pays("Saint-Christophe-et-Niévès", 0.05, 261, 197.46));
    tableauPays.push(new Pays("Monaco", 0.04, 2, 18712.87));
    tableauPays.push(new Pays("Liechtenstein", 0.04, 160, 220.23));
    tableauPays.push(new Pays("Saint-Marin", 0.03, 61, 532.31));
    tableauPays.push(new Pays("Palaos", 0.02, 459, 45.49));
    tableauPays.push(new Pays("Tuvalu", 0.01, 26, 460.16));
    tableauPays.push(new Pays("Nauru", 0.01, 21, 480.57));
    tableauPays.push(new Pays("Vatican", 0.001, 0.4, 1900.00));
    melangerTableau(tableauPays);
}

//PROGRAMME
//Ajout de boite de dialogue des règles
const regle = document.getElementById("regle-btn");
const boiteTexte = document.getElementById("csm");

regle.addEventListener("click", () => {
  boiteTexte.style.display = "block";
  boiteTexte.removeAttribute("hidden");
});

function fermerBoite() {
    boiteTexte.style.display = "none";
    boiteTexte.setAttribute("hidden", true);
}

//Ajout de boite de dialogue du menu
const menu = document.getElementById("menu-btn");
const boiteTexte2 = document.getElementById("menu");

menu.addEventListener("click", () => {
  boiteTexte2.style.display = "block";
  boiteTexte2.removeAttribute("hidden");
});

function fermerBoite2() {
    boiteTexte2.style.display = "none";
    boiteTexte2.setAttribute("hidden", true);
}

//Initialisation des variables
var score;
var reussi;
var tourMax;
var paysA;
var paysB;
var drapA = document.createElement('img');;
var drapB = document.createElement('img');;

//Initialisation des boutons
$("#plus-btn").hide();
$("#moins-btn").hide();
$("#rejouer-btn").hide();

//Avance d'un tour
function avanceTour() {
    if(reussi==true && score != tourMax){
        $("#score").html("Score : "+score+"/"+tourMax);
        paysA=paysB;
        paysB=tableauPays.shift();
        $("#score").html("Score : "+score+"/"+tourMax);
        $("#paysA").html(paysA.nom);
        $("#denPaysA").html(paysA.densite.toLocaleString('fr-FR', options)+" habitants/km²");
        $("#paysB").html(paysB.nom);

        //Ajouter les drapeaux
        ajouterDrapeau(paysA, paysB);
    }else{
        $("#resultat").show();
        if(score == tourMax){
            $("#resultat").html("Victoire !");
        }else{
            $("#resultat").html("Défaite");
        }

        //Afficher le résultat
        $("#score").html("Score : "+score);
        updateScore(score);
        $("#highscore").html("Meilleur score : "+meilleurScore());

        //Cacher les boutons
        $("#plus-btn").hide();
        $("#moins-btn").hide();
        $("#paysA").hide();
        $("#denPaysA").hide();
        $("#paysB").hide();
        $("#rejouer-btn").show();

        //Cacher les drapeaux
        drapA.style.display = 'none';
        drapB.style.display = 'none';
    }
}

//BOUTONS
$("#commencer-btn").click(function () {
    //Highscore
    $("#highscore").show();
    $("#highscore").html("Meilleur score : "+meilleurScore());

    $("#commencer-btn").hide();
    $("#plus-btn").show();
    $("#moins-btn").show();
    $("#paysA").show();
    $("#denPaysA").show();
    $("#paysB").show();
    $("#score").show();

    //Initialisation des valeurs
    creaTab();
    score=0;
    tourMax=tableauPays.length-1;
    paysA=tableauPays.shift();
    paysB=tableauPays.shift();

    $("#score").html("Score : "+score+"/"+tourMax);
    $("#paysA").html(paysA.nom);
    $("#denPaysA").html(paysA.densite.toLocaleString('fr-FR', options)+" habitants/km²");
    $("#paysB").html(paysB.nom);

    //Ajout des drapeaux
    ajouterDrapeau(paysA,paysB);
    document.getElementById('drapeauA').appendChild(drapA);
    document.getElementById('drapeauB').appendChild(drapB);
});

$("#plus-btn").click(function () {
    if(paysA.densite==paysB.densite){
        reussi=true;
        score++;
    }else if(paysA.densite > paysB.densite){
        reussi=false;
    }else{
        reussi=true;
        score++;
    }
    avanceTour();
});

$("#moins-btn").click(function () {
    if(paysA.densite==paysB.densite){
        reussi=true;
        score++;
    }else if(paysA.densite > paysB.densite){
        reussi=true;
        score++;
    }else{
        reussi=false;
    }
    avanceTour();
});

$("#rejouer-btn").click(function () {
    //Highscore
    $("#highscore").html("Meilleur score : "+meilleurScore());

    $("#rejouer-btn").hide();
    $("#resultat").hide();
    $("#plus-btn").show();
    $("#moins-btn").show();
    $("#paysA").show();
    $("#denPaysA").show();
    $("#paysB").show();
    $("#score").show();

    //Afficher de nouveau les drapeaux
    drapA.style.display = 'inline';
    drapB.style.display = 'inline';

    //Initialisation des valeurs
    creaTab();
    score=0;
    tourMax=tableauPays.length-1;
    paysA=tableauPays.shift();
    paysB=tableauPays.shift();

    $("#score").html("Score : "+score+"/"+tourMax);
    $("#paysA").html(paysA.nom);
    $("#denPaysA").html(paysA.densite.toLocaleString('fr-FR', options)+" habitants/km²");
    $("#paysB").html(paysB.nom);

    //Ajout des drapeaux
    ajouterDrapeau(paysA,paysB);
});