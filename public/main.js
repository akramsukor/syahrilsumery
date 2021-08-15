var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle () {
    if(MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
    MenuItems.style.maxHeight = "0px";
    }
}

//hero animation-----------------------------------------------------------------------------

gsap.from('.hero', {opacity: 0, height: 0, duration: 1, y: -50, ease: Power2.easeInOut})
// gsap.fromTo('.hero', {width: "100%"}, {delay: 1, duration: 1.2, width: "80%", ease: Power2.easeInOut})
gsap.fromTo('.backgroundSlider', {x: "-100%"}, {delay: 1.2, x: "0%", duration: 1.2, ease: Power2.easeInOut})
gsap.fromTo('.backgroundSlider2', {x: "-100%"}, {delay: 1.8, x: "0%", duration: 1.2, ease: Power2.easeInOut})
gsap.fromTo('.banner1', {y: "100%"}, {delay: 1.5, y: "0%", duration: 1.2, ease: Power2.easeInOut})
// gsap.from('.menuNav', {duration: 1, x: "100%", ease: Power2.easeInOut})

// const hero = document.querySelector('.hero');
// const slider = document.querySelector('.slider');
// const headline = document.querySelector('.headline');
// const tl = gsap.timeline();s
// tl.fromTo(hero, {height: "0%"}, {duration: 1, height: "80%"});
// tl.fromTo('.hero', {width: 0, height: 0}, {duration: 1.5, width: 100, height: 200});
// tl.to(".hero", {duration: 1, x: 200, scale: 2, y: 20});
// gsap.to("#logo", {duration: 1, x: 100});

const carouselSlide = document.querySelector('.carousel-slide');

const carouselImages = document.querySelectorAll('.carousel-slide img');

gsap.from('.carousel-container', {opacity: 0, height: 0, duration: 1, y: -50, ease: Power2.easeInOut})

// gsap.from('.headline2', {opacity: 0, height: 0, duration: 2, y: -50, ease: Power2.easeInOut})


const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

nextBtn.addEventListener('click',()=>{
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if (carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
});


//auto slider------------------------------------------------------------------

var counter2 = 1;
    setInterval(function(){
        document.getElementById('radio' + counter2).checked = true;counter2++;
        if(counter2>4){
            counter2 = 1;
        }
    },4000);