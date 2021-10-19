var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle () {
    if(MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
    MenuItems.style.maxHeight = "0px";
    }
}

const texts = ['We build houses and run civil construction projects. We are a trusted contractor with skills, supplies, and talents. Let us turn your dream projects into reality.'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type () {

    // if (count === texts.length) {
    //     count = 0;
    // }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 25);

}());

// const texts2 = ['Kami membina rumah dan menjalankan pembinaan awam. Kami adalah kontraktor yang dipercayai dilengkapi dengan sumber dan tenaga pekerja yang mahir. Mari kami jadikan impian anda sebagai realiti.'];
// let count2 = 0;
// let index2 = 0;
// let currentText2 = '';
// let letter2 = '';

// (function type2 () {

//     // if (count === texts.length) {
//     //     count = 0;
//     // }
//     currentText2 = texts2[count2];
//     letter2 = currentText2.slice(0, ++index2);

//     document.querySelector('.typing2').textContent2 = letter2;
//     if (letter2.length === currentText2.length) {
//         count2++;
//         index2 = 0;
//     }
//     setTimeout(type2, 25);

// }());

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

//testimonial slider-----------------------------------------------------------------------

const carouselSlide2 = document.querySelector('.carousel-slide2');
const carouselImages2 = document.querySelectorAll('.carousel-slide2-image img');

const prevBtn2 = document.querySelector('#prevBtn2');
const nextBtn2 = document.querySelector('#nextBtn2');

let counter2 = 1;
const size2 = carouselImages2[0].clientWidth;

carouselSlide2.style.transform = 'translateX(' + (-size2*counter2) + 'px)';

nextBtn2.addEventListener('click',()=>{
    if(counter2 >= carouselImages2.length - 1) return;
    carouselSlide2.style.transition = 'transform 0.7s ease-in-out';
    counter2++;
    carouselSlide2.style.transform = 'translateX(' + (-size2*counter2) + 'px)';
});

prevBtn2.addEventListener('click',()=>{
    if(counter2 <= 0) return;
    carouselSlide2.style.transition = 'transform 0.7s ease-in-out';
    counter2--;
    carouselSlide2.style.transform = 'translateX(' + (-size2*counter2) + 'px)';
});

carouselSlide2.addEventListener('transitionend', ()=>{
    if (carouselImages2[counter2].id === 'lastClone2'){
        carouselSlide2.style.transition = 'none';
        counter2 = carouselImages2.length - 2;
        carouselSlide2.style.transform = 'translateX(' + (-size2*counter2) + 'px)';
    }
    if (carouselImages2[counter2].id === 'firstClone2'){
        carouselSlide2.style.transition = 'none';
        counter2 = carouselImages2.length - counter2;
        carouselSlide2.style.transform = 'translateX(' + (-size2*counter2) + 'px)';
    }
});

setTimeout(function() {
    setInterval(function() {
        document.getElementById("nextBtn2").click();
    }, 5000);
}, 5000);

//hero animation-----------------------------------------------------------------------------

gsap.fromTo('.headline2 h1', {delay: 0.3, x: "-100%", Y:"-100%", scale: 0}, {x: "0%", Y: "0%", duration: 1, scale: 1, ease: Power2.easeInOut})
gsap.fromTo('.navbar', {x: "-100%"}, {delay: .6, x: "0%", duration: 1.2, ease: Power2.easeInOut});
gsap.from('.slider3Container', {height: 0, duration: 1, ease: Power2.easeInOut});
gsap.fromTo('.banner1', {y: "100%"}, {delay: 1.5, y: "0%", duration: 1.2, ease: Power2.easeInOut});
gsap.fromTo('.rowTop', {y: "200", opacity:0}, {opacity: 1, delay: .8, y: "0%", duration: 1, ease: Power2.easeInOut});

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.mainTitle',
        start: "bottom bottom",
    }
});
tl3.from(".mainTitle", { y: 100, scale: 0, duration: .5 });

let tl9 = gsap.timeline({
    scrollTrigger: {
        trigger: '.row',
        start: "top bottom",
    }
});
tl9.from(".row", { y: 100, duration: .5, ease: Power2.easeOut });

let t20 = gsap.timeline({
    scrollTrigger: {
        trigger: '.mainTitleTopDiv',
        start: "top bottom",
    }
});
t20.from(".mainTitleTopDiv", { y: 100, duration: .5 });

//auto slider------------------------------------------------------------------

// var counter = 1;
//     setInterval(function(){
//         document.getElementById('radio' + counter).checked = true;counter++;
//         if(counter>4){
//             counter = 1;
//         }
//     },5000);

// var counter2 = 1;
// setInterval(function() {
//     document.getElementById('radio' + counter2).checked = true;counter2++;
//     if(counter2>4){
//         counter2 = 1;
//     }
// },5000);

// var delayInMilliseconds = 5000;
// var counter3 = 1;

// setTimeout(function() {
// setInterval(function() {
//     document.getElementById('radioTwo' + counter3).checked = true;counter3++;
//     if(counter3>4){
//         counter3 = 1;
//     }
// },5000);
// }, delayInMilliseconds);

var counter4 = 1;
setInterval(function() {
    document.getElementById('radioThree' + counter4).checked = true;counter4++;
    if(counter4>4){
        counter4 = 1;
    }
},6000);

// lightslider-------------------------------------

// $(document).ready(function() {
//     $('#autoWidth').lightSlider({
//         autoWidth:true,
//         loop:true,
//         onSliderLoad: function() {
//             $('#autoWidth').removeClass('cS-hidden');
//         } 
//     });  
//   });

  $(document).ready(function() {
    $('#responsive').lightSlider({
        item:3,
        loop:false,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:500,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  
  });

//   OUR VISION -------------------

//   $(document).ready(function() {
//     $('#responsive4').lightSlider({
//         item:2,
//         loop:false,
//         slideMove: 1,
//         easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
//         speed: 600,
//         responsive : [
//             {
//                 breakpoint:800,
//                 settings: {
//                     item:2,
//                     slideMove:1,
//                     slideMargin:6,
//                   }
//             },
//             {
//                 breakpoint:500,
//                 settings: {
//                     item:1,
//                     slideMove:1
//                   }
//             }
//         ]
//     });  
//   });

//   $(document).ready(function() {
//     $('#responsive2').lightSlider({
//         item:3,
//         loop:false,
//         slideMove:2,
//         easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
//         speed:600,
//         responsive : [
//             {
//                 breakpoint:800,
//                 settings: {
//                     item:2,
//                     slideMove:1,
//                     slideMargin:6,
//                   }
//             },
//             {
//                 breakpoint:500,
//                 settings: {
//                     item:1,
//                     slideMove:1
//                   }
//             }
//         ]
//     });  
//   });

//   $(document).ready(function() {
//     $('#responsive3').lightSlider({
//         item:1,
//         loop:false,
//         slideMove:1,
//         easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
//         speed:600
//     });  
//   });

//   $(document).ready(function() {
//     $('#responsive4').lightSlider({
//         item:1,
//         loop:false,
//         slideMove:1,
//         easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
//         speed:600
//     });  
//   });

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
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your form"
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









