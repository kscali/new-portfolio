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

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      939: {
        items: 4
      }
    }
  });

  var skillsTopOffset = $(".skills-section").offset().top;
  var statsTopOffset = $(".stats-section").offset().top;
  var countUpFinished = false;

  $(window).scroll(() => {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#e600e6",
        trackColor: "#f2f2f2",
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find(".percent")
            .text(Math.round(percent));
        }
      });
    }

    if (
      !countUpFinished &&
      window.pageYOffset > statsTopOffset - $(window).height() + 200
    ) {
      $(".counter").each(function() {
        let el = $(this);
        let endVal = parseInt(el.text());
        el.countup(endVal);
      });

      countUpFinished = true;
    }
  });

  $("[data-fancybox]").fancybox();

  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false
    }
  });

  $("#filters a").click(function() {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    let selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false
      }
    });

    return false;
  });
});
