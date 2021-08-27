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

gsap.fromTo('.backgroundSlider', {x: "-100%"}, {delay: 1.2, x: "0%", duration: 1.2, ease: Power2.easeInOut})
gsap.fromTo('.navbar', {x: "-100%"}, {delay: 1.2, x: "0%", duration: 1.2, ease: Power2.easeInOut})
gsap.fromTo('.backgroundSlider2', {x: "-100%"}, {delay: 1.8, x: "0%", duration: 1.2, ease: Power2.easeInOut})
gsap.fromTo('.backgroundSlider3', {x: "-100%"}, {delay: 1.8, x: "0%", duration: 1.2, ease: Power2.easeInOut})
gsap.fromTo('.banner1', {y: "100%"}, {delay: 1.5, y: "0%", duration: 1.2, ease: Power2.easeInOut})
gsap.from('.slider3', {height: 0, duration: 1.2, ease: Power2.easeInOut})
gsap.fromTo('.rowTop', {y: "200", opacity:0}, {opacity: 1, delay: 2, y: "0%", duration: 1, ease: Power2.easeInOut})

//auto slider------------------------------------------------------------------

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
},8000);

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

  $(document).ready(function() {
    $('#responsive2').lightSlider({
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

  $(document).ready(function() {
    $('#responsive3').lightSlider({
        item:1,
        loop:false,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600
    });  
  });














