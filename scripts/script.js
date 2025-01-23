// nav menu
const navMenuButton = document.querySelector(".nav-links button");
const navMenu = document.querySelector(".menu-items");
const navMenuImg = document.querySelector(".nav-links button img");

// filter menu
const filterButton = document.querySelector(".filter-button");
const filterBg = document.querySelector(".filters-bg");
const filterItems = document.querySelector(".form-vacancies-filter");
const filterIcon = document.querySelector(".filter-button button img");
const filterButtonBttn = document.querySelector(".filter-button button");
const filterLabelImage = document.querySelector(".label-image span");

// nav menu
navMenuButton.addEventListener("click", toggleNavMenu); // bij klik op .nav-links button, roep functie toggleNavMenu aan

// filter menu
filterButton.addEventListener("click", filterAnimationToggle); // bij klik op .filter-button, roep functie filterAnimationToggle aan 

// nav menu
function toggleNavMenu() {
    navMenuButton.classList.toggle("openMenu"); // voeg class .openMenu toe aan navMenuButton
    navMenu.classList.toggle("openMenu"); // voeg class .openMenu toe aan navMenu
    navMenuImg.classList.toggle("openMenu"); // voeg class .openMenu toe aan navMenuImg
}

// filter menu
function filterAnimationToggle() { // deze funties worden aangeroepen, bij een klik op de knop, want filterAnimationToggle is gekoppeld aan de 'click' event listener
    filterBackgroundAnimation();
    filterItemsAnimation();
    toggleFilterItems();
}

// filter menu 
function filterBackgroundAnimation() {
    if (filterBg.classList.contains("openMenu")) { // als filterBG de class .openMenu bevat, voeg .closeMenu toe en verwijder .openMenu, zo niet: voeg toe .openMenu en verwijder .closeMenu
        filterBg.classList.add("closeMenu");
        filterBg.classList.remove("openMenu");
    } else {
        filterBg.classList.add("openMenu");
        filterBg.classList.remove("closeMenu");
    }
}

// filter menu 
function filterItemsAnimation() {
    if (filterItems.classList.contains("openMenu")) { // als filterItems de class .openMenu bevat, voeg .closeMenu toe en verwijder .openMenu, zo niet: voeg toe .openMenu en verwijder .closeMenu
        filterItems.classList.add("closeMenu");
        filterItems.classList.remove("openMenu");
    } else {
        filterItems.classList.add("openMenu");
        filterItems.classList.remove("closeMenu");
    }   
}

// filter menu 
function toggleFilterItems() {
    filterIcon.classList.toggle("openMenu"); // voeg class .openMenu toe aan filterIcon
    filterButtonBttn.classList.toggle("openMenu"); // voeg class .openMenu toe aan filterButtonBttn
    filterLabelImage.classList.toggle("openMenu"); // voeg class .openMenu toe aan filterLabelImage
}