function toggleNav() {
    document.getElementById("navbarNav").classList.toggle("show-nav");
}

function showNav() {
    document.body.classList.add('show-nav');
}

function showNav1() {
    document.body.classList.add('show-nav1');
}


function showNav2() {
    document.body.classList.add('show-nav2');
}

function showNav3() {
    document.body.classList.add('show-nav3');
}

function showSuggestions() {
    let suggestions = [
        "Ajouter des fonctionnalités de chat en direct",
        "Optimiser la vitesse de chargement du site",
        "Améliorer la mise en page pour une meilleure expérience utilisateur",
        "Ajouter des vidéos explicatives",
        "Intégrer des témoignages clients",
        "Créer un blog pour partager des articles pertinents",
    ];

    let suggestionList = "Suggestions pour le site :\n";
    suggestions.forEach(function (suggestion, index) {
        suggestionList += (index + 1) + ". " + suggestion + "\n";
    });

    alert(suggestionList);
}
