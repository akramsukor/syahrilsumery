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

const windowWidth = window.innerWidth;
const horizontalLength = document.querySelector('.element-wrapper').scrollWidth;
const distFromTop = document.querySelector('.horizontal-section').offsetTop;
const scrollDistance = distFromTop + horizontalLength - windowWidth;

document.querySelector('.horizontal-section').style.height = horizontalLength + 'px';

window.onscroll = function() {
    const scrollTop = window.pageYOffset;
    if(scrollTop >= distFromTop && scrollTop <= scrollDistance) {
        document.querySelector('.element-wrapper').style.transform = 'translateX(-' + (scrollTop - distFromTop) + 'px)';
    }
}








// GSAP Animation

// gsap.to(".mentor-img", {
//     yPercent: -100,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".mentor-section",
//       scrub: true
//     }, 
// });
  
// gsap.to(".background-img", {
//     yPercent: 10,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".mentor-section",
//       scrub: true
//     }, 
// });

// gsap.to(".element2", {
//     xPercent: -10,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".element2",
//       start: "bottom bottom",
//       scrub: true
//     }, 
// });