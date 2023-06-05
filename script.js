let nav1Activated = false;
let showNav2Activated = false;
let showNav3Activated = false;

function toggleNav1() {
    let navbar = document.getElementById("navbar");
    let sections = document.getElementsByClassName("show-nav1");
    let sLink = document.getElementsByClassName("s-bg")[0];
    let cLink = document.getElementsByClassName("c-bg")[0];

    if (!nav1Activated) {
        navbar.style.display = "block";

        for (let i = 0; i < sections.length; i++) {
            sections[i].style.display = "block";
        }

        nav1Activated = true;
        sLink.classList.add("show-nav2");
        showNav2Activated = true;
        cLink.classList.add("active");
        showNav3(); // Call the showNav3() function
    } else {
        navbar.style.display = "none";

        for (let i = 0; i < sections.length; i++) {
            sections[i].style.display = "none";
        }

        nav1Activated = false;
        sLink.classList.remove("show-nav2");
        showNav2Activated = false;
        cLink.classList.remove("active");
        body.classList.remove("show-nav3");
    }
}

function showNav2() {
    let schemaImage = document.getElementById("schemaImage");
    if (nav1Activated && showNav2Activated) {
        if (!schemaImage) {
            schemaImage = document.createElement("img");
            schemaImage.id = "schemaImage";
            schemaImage.src = "assets/SchemaMoSCoW.jpg";
            schemaImage.alt = "Schéma";
            document.body.appendChild(schemaImage);
        }
    } else {
        if (schemaImage) {
            schemaImage.remove();
        }
    }
}

function showNav3() {
    let body = document.body;
    let coLink = document.getElementsByClassName("c-bg")[0];

    if (nav1Activated && showNav2Activated) {
        if (coLink.classList.contains("active")) {
            coLink.classList.remove("active");
            body.classList.remove("show-nav3");
            showNav3Activated = false;
        } else {
            coLink.classList.add("active");
            body.classList.add("show-nav3");
            showNav3Activated = true;
        }
    }
}

function showSuggestions() {
    if (nav1Activated && showNav2Activated && showNav3Activated) {
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
}
