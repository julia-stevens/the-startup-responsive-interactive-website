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
const labelImageFilter = document.querySelector(".label-image span");
// const filterImgSpan = document.querySelector(".filter-button span");


// nav menu
navMenuButton.addEventListener("click", toggleNavMenu);

// filter menu
filterButton.addEventListener("click", filterAnimationToggle);


// nav menu
function toggleNavMenu() {
    navMenuButton.classList.toggle("openMenu");
    navMenu.classList.toggle("openMenu");
    navMenuImg.classList.toggle("openMenu");
}

function filterAnimationToggle() {
    filterBackgroundAnimationHandler();
    filterItemsAnimationHandler();
    toggleFilterItems();
}

// filter menu 
function filterBackgroundAnimationHandler() {
    if (filterBg.classList.contains("openMenu")) {
        filterBg.classList.add("closeMenu");
        filterBg.classList.remove("openMenu");
    } else {
        filterBg.classList.add("openMenu");
        filterBg.classList.remove("closeMenu");
    }
}

function filterItemsAnimationHandler() {
    if (filterItems.classList.contains("openMenu")) {
        filterItems.classList.add("closeMenu");
        filterItems.classList.remove("openMenu");
    } else {
        filterItems.classList.add("openMenu");
        filterItems.classList.remove("closeMenu");
    }   
}

function toggleFilterItems() {
    filterIcon.classList.toggle("openMenu");
    filterButtonBttn.classList.toggle("openMenu");
    labelImageFilter.classList.toggle("openMenu");
    // filterImgSpan.classList.toggle("openMenu");
}