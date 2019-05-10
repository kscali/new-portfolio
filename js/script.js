$(document).ready(function() {
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false
  });

  var type = new Typed(".typed", {
    strings: [
      "Software Engineer.",
      "Web Developer.",
      "Music Lover.",
      "Lifelong Learner."
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });
});
