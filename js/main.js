document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav2'); // Updated class name
    const main = document.querySelector('.main2'); // Updated class name

    // Function to toggle the visibility of the navigation menu
    function toggleNav() {
        if (nav.classList.contains('open')) {
            nav.style.left = '-200px';
            main.style.marginLeft = '0';
            nav.classList.remove('open');
        } else {
            nav.style.left = '0px';
            main.style.marginLeft = '200px';
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
    const main = document.querySelector('.main'); // Updated class name

    // Function to toggle the visibility of the navigation menu
    function toggleNav() {
        if (nav.classList.contains('open')) {
            nav.style.left = '-200px';
            main.style.marginLeft = '0';
            nav.classList.remove('open');
        } else {
            nav.style.left = '0px';
            main.style.marginLeft = '200px';
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
