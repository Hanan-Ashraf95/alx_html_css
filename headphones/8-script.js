document.addEventListener('DOMContentLoaded', function () {
    // Select the two elements we need to work with
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.main-nav');

    // Add a 'click' event listener to the hamburger menu icon
    menuIcon.addEventListener('click', function () {
        // When the icon is clicked, toggle the 'active' class on both elements
        menuIcon.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});
