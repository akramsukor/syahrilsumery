const menuBtn = document.querySelector('.menu-icon');
let menuOpen = false;
menuBtn.addEventListener('click', function () {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

const MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle () {
    if(MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
    MenuItems.style.maxHeight = "0px";
    }
}