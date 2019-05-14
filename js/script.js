$(window).on("load", function() {
  $(".loader .inner").fadeOut(500, function() {
    $(".loader").fadeOut(750);
  });

  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false
    }
  });
});

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
    nav: true,
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

  $("#navigation li a").click(function(e) {
    e.preventDefault();
    let targetElement = $(this).attr("href");
    let targetPostion = $(targetElement).offset().top;
    $("html, body").animate(
      {
        scrollTop: targetPostion - 50
      },
      "slow"
    );
  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    const body = $("body");
    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.removeClass("fixedNav");
      body.css("padding-top", 0);
    }
  }
});
