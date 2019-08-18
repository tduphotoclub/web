document.addEventListener('DOMContentLoaded', init, false);

function init() {
    function showMobileNavbar() {
        mobileNavbar.style.width = "250px";
        mobileNavbar.classList.remove('no-display');
    }

    function closeNav() {
        mobileNavbar.style.width = "0px";
        mobileNavbar.classList.add('no-display')
    }

    var mobileNavbar = document.getElementById("mobile-navbar");
    var showButton = document.getElementById('sidebar-show-button');
    var hideButton = document.getElementById('close-button');
    showButton.addEventListener('click', showMobileNavbar, true);
    hideButton.addEventListener('click', closeNav, true);
}