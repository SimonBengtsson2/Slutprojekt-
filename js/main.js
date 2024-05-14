document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav2'); // Updated class name

    // Function to toggle the visibility of the navigation menu
    function toggleNav() {
        if (nav.classList.contains('open')) {
            nav.style.left = '-200px';
            nav.classList.remove('open');
        } else {
            nav.style.left = '0px';
            nav.classList.add('open');
        }
    }

    // Event listener to toggle the navigation menu when clicking
    document.addEventListener('click', function(event) {
        if (event.clientX < 200) { // Clicked on the left side of the screen
            toggleNav();
        } else if (event.target.closest('.nav2') === null) { // Clicked outside the navigation
            if (nav.classList.contains('open')) {
                toggleNav();
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav'); // Updated class name

    // Function to toggle the visibility of the navigation menu
    function toggleNav() {
        if (nav.classList.contains('open')) {
            nav.style.left = '-200px';
            nav.classList.remove('open');
        } else {
            nav.style.left = '0px';
            nav.classList.add('open');
        }
    }

    // Event listener to toggle the navigation menu when clicking
    document.addEventListener('click', function(event) {
        if (event.clientX < 200) { // Clicked on the left side of the screen
            toggleNav();
        } else if (event.target.closest('.nav') === null) { // Clicked outside the navigation
            if (nav.classList.contains('open')) {
                toggleNav();
            }
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav3'); // Updated class name

    // Function to toggle the visibility of the navigation menu
    function toggleNav() {
        if (nav.classList.contains('open')) {
            nav.style.left = '-200px';
            nav.classList.remove('open');
        } else {
            nav.style.left = '0px';
            nav.classList.add('open');
        }
    }

    // Event listener to toggle the navigation menu when clicking
    document.addEventListener('click', function(event) {
        if (event.clientX < 200) { // Clicked on the left side of the screen
            toggleNav();
        } else if (event.target.closest('.nav3') === null) { // Clicked outside the navigation
            if (nav.classList.contains('open')) {
                toggleNav();
            }
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const rekomendation = document.querySelector('.rekomendation'); // Reference to the rekomendation aside

    // Function to toggle the visibility of the rekomendation aside
    function toggleRekomendation() {
        if (rekomendation.classList.contains('open')) {
            rekomendation.style.left = '-200px';
            rekomendation.classList.remove('open');
        } else {
            rekomendation.style.left = '0px';
            rekomendation.classList.add('open');
        }
    }

    // Event listener to toggle the rekomendation aside when clicking
    rekomendation.addEventListener('click', function(event) {
        toggleRekomendation();
        event.stopPropagation(); // Prevent the click event from propagating to the document
    });

    // Event listener to close the rekomendation aside when clicking outside of it
    document.addEventListener('click', function(event) {
        if (event.target.closest('.rekomendation') === null && rekomendation.classList.contains('open')) {
            toggleRekomendation();
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav-about'); // Updated class name

    // Function to toggle the visibility of the navigation menu
    function toggleNav() {
        if (nav.classList.contains('open')) {
            nav.style.left = '-200px';
            nav.classList.remove('open');
        } else {
            nav.style.left = '0px';
            nav.classList.add('open');
        }
    }

    // Event listener to toggle the navigation menu when clicking
    document.addEventListener('click', function(event) {
        if (event.clientX < 200) { // Clicked on the left side of the screen
            toggleNav();
        } else if (event.target.closest('.nav-about') === null) { // Clicked outside the navigation
            if (nav.classList.contains('open')) {
                toggleNav();
            }
        }
    });
});







// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const games = {
        action: [
            { name: "Sea of Thieves", image: "img/SEA.png", link: "https://www.seaofthieves.com/" },
            { name: "Valorant", image: "img/Val.png", link: "https://playvalorant.com/en-gb/" },
            { name: "CS:GO", image: "img/Count.png", link: "https://blog.counter-strike.net/" },
            { name: "Apex Legends", image: "img/Apex.png", link: "https://www.ea.com/en-gb/games/apex-legends" }
        ],
        adventure: [
           
            { name: "Minecraft", image: "img/mine.png", link: "https://www.minecraft.net/en-us" },
            { name: "Terraria", image: "img/terr.png", link: "https://terraria.org/" },
            { name: "No Man's Sky", image: "img/no.png", link: "https://www.nomanssky.com/" }
        ],
        strategy: [
            { name: "League of Legends", image: "img/lege.png", link: "https://www.leagueoflegends.com/en-gb/" },
            { name: "Rocket League", image: "img/Rocket.png", link: "https://www.rocketleague.com/en" },
            { name: "Destiny", image: "img/des.png", link: "https://www.bungie.net/7/en/destiny" },
            { name: "World of Warcraft", image: "img/WoW.png", link: "https://worldofwarcraft.blizzard.com/en-us/" },
            { name: "Rainbow Six Siege", image: "img/Rainbow2.png", link: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege" }
        ]
    };

    const rekomendation = document.querySelector('.rekomendation');
    const main = document.querySelector('.main3');
    const checkboxes = rekomendation.querySelectorAll('.genre-filter input[type="checkbox"]');
    const searchButton = rekomendation.querySelector('.search-button');

    // Function to render recommended games based on selected genres
    function renderRecommendations() {
        main.innerHTML = '';
        const selectedGenres = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        let recommendedGames = [];
        selectedGenres.forEach(genre => {
            recommendedGames = recommendedGames.concat(games[genre]);
        });

        // Render recommended games
        recommendedGames.forEach(game => {
            const card = document.createElement('div');
            card.classList.add('card');
            const image = document.createElement('img');
            image.src = game.image;
            const link = document.createElement('a');
            link.href = game.link;
            link.appendChild(image);
            card.appendChild(link);
            const name = document.createElement('div');
            name.textContent = game.name;
            card.appendChild(name);
            main.appendChild(card);
        });
    }

    // Event listener for search button click
    searchButton.addEventListener('click', renderRecommendations);
});


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}