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

// gsap.fromTo('.backgroundSlider', {x: "-100%"}, {delay: 1.2, x: "0%", duration: 1.2, ease: Power2.easeInOut})
gsap.fromTo('.navbar', {x: "-100%"}, {delay: 1.2, x: "0%", duration: 1.2, ease: Power2.easeInOut});
gsap.from('.slider3Container', {height: 0, duration: 1.2, ease: Power2.easeInOut});
// gsap.fromTo('.backgroundSlider2', {x: "-100%"}, {delay: 1.8, x: "0%", duration: 1.2, ease: Power2.easeInOut})
// gsap.fromTo('.backgroundSlider3', {x: "-100%"}, {delay: 1.8, x: "0%", duration: 1.2, ease: Power2.easeInOut})
gsap.fromTo('.banner1', {y: "100%"}, {delay: 1.5, y: "0%", duration: 1.2, ease: Power2.easeInOut});
gsap.fromTo('.rowTop', {y: "200", opacity:0}, {opacity: 1, delay: 2, y: "0%", duration: 1, ease: Power2.easeInOut});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.slider',
        start: "bottom bottom",
    }
});
tl.from(".slider", { scale: 0, opacity: 0, duration: 1});

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.slider2',
        start: "bottom bottom",
    }
});
tl2.from(".slider2", { scale: 0, opacity: 0, duration: 1});

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.mainTitle',
        start: "bottom bottom",
    }
});
tl3.from(".mainTitle", { y: 200, scale: 0, opacity: 0, duration: 1 });

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.ourProjects',
        start: "top bottom",
    }
});
tl4.from(".ourProjects", { y: 200, duration: 1 });

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.testimonial',
        start: "top bottom"
    }
});
tl5.from(".testimonial", { y: 200, duration: 1 });

let tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: '.maps',
        start: "top bottom",
    }
});
tl6.from(".maps", { y: 200, duration: 1 });

let tl9 = gsap.timeline({
    scrollTrigger: {
        trigger: '.row',
        start: "top bottom",
    }
});
tl9.from(".row", { y: "200", duration: .5, ease: Power2.easeOut });

let tl0 = gsap.timeline({
    scrollTrigger: {
        trigger: '.ourServices',
        start: "top bottom",
    }
});
tl0.from(".ourServices", { y: "200px", opacity: 0, duration: 1, ease: Power2.easeOut });

let tl11 = gsap.timeline({
    scrollTrigger: {
        trigger: '.ourVision',
        start: "top bottom",
    }
});
tl11.from(".ourVision", { y: "200px", opacity: 0, duration: 1, ease: Power2.easeOut });

let tl12 = gsap.timeline({
    scrollTrigger: {
        trigger: '.contactUs',
        start: "top bottom",
    }
});
tl12.from(".contactUs", { y: "200px", opacity: 0, duration: 1, ease: Power2.easeOut });

// gsap.from(".mainTitle1", {
//     scrollTrigger: {
//         trigger: '.mainTitle1',
//         start: "top center",
//     },
//     x: -1000
// });

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

  $(document).ready(function() {
    $('#responsive4').lightSlider({
        item:1,
        loop:false,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600
    });  
  });

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









