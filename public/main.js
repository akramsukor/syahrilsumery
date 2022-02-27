const menuBtn = document.querySelector('.menu-icon');
menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('open');
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

// GSAP Animation

gsap.to(".mentor-img", {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".mentor-section",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
});
  
gsap.to(".background-img", {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
      trigger: ".mentor-section",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
});