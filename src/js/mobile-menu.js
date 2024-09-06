const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.close-menu'); 

// Opening the menu when clicking on the burger icon
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Closing the menu when clicking on the close (X) icon
closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

// Closing the menu when clicking outside the menu area
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navLinks.contains(event.target);
    const isClickOnBurger = burger.contains(event.target);

    if (!isClickInsideMenu && !isClickOnBurger) {
        navLinks.classList.remove('active');
    }
});