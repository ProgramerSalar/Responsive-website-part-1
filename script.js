const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#mini-circle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

circleMouseFollower();

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#navbar", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  }).to(".boundingelem", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 2,
    delay: -1,
    stagger: 0.2,
  });
}

firstPageAnim();

function circleChaptiKaro() {
  // define the default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);
  });
}

circleChaptiKaro();

// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao,
//  jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo,
//   move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye




document.querySelectorAll(".elem").forEach(function (elem){

  elem.addEventListener("mouseleave", function(details){
    // console.log(details.clientX, details.clientY)
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      duration: 0.5,
    });
  })
})