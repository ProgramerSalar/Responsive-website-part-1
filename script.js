const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});



function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#mini-circle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

circleMouseFollower();
