// nav menu
const navMenuButton = document.querySelector(".nav-links button");
const navMenu = document.querySelector(".menu-items");

// filter menu
const filterButton = document.querySelector(".filter-button");
const filter = document.querySelector(".form-vacancies-filter");

// nav menu
navMenuButton.addEventListener("click", toggleNavMenu);

// filter menu
filterButton.addEventListener("click", toggleFilterMenu);


// nav menu
function toggleNavMenu() {
    navMenuButton.classList.toggle("openMenu");
    navMenu.classList.toggle("openMenu");
}

// filter menu 
function toggleFilterMenu() {
    filterButton.classList.toggle("openFilter");
    filter.classList.toggle("openFilter");
}