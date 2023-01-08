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

//vertical slider-----------------------------------------------------------------------

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientHeight;

carouselSlide.style.transform = 'translateY(' + (-size*counter) + 'px)';

nextBtn.addEventListener('click',()=>{
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateY(' + (-size*counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateY(' + (-size*counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if (carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateY(' + (-size*counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateY(' + (-size*counter) + 'px)';
    }
});

setTimeout(function() {
    setInterval(function() {
        document.getElementById("nextBtn").click();
    }, 1500);
}, 2000);

//form function------------------------------------------

var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Borang berjaya dihantar! Kami akan hubungi anda semula secepat mungkin.";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! Ada masalah ketika menghantar borang anda. Sila cuba lagi kemudian."
  });
}
form.addEventListener("submit", handleSubmit)

//getting modal opening buttons------------------------------------------

var modalBtns = document.querySelectorAll('.modal-open');

modalBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = btn.getAttribute('data-modal');

        document.getElementById(modal).style.display = "block";
    };
});

var closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = (btn.closest(".modal").style.display = "none");
    };
});

window.onclick = function(e) {
    if(e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
};



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