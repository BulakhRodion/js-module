$(document).ready(function () {
  //Tabs function
  $(".cards__tabs-trigger").on("click", function (event) {
    event.preventDefault();
    $(this).addClass("active-trigger").siblings().removeClass("active-trigger");
    $($(this).attr("href")).addClass("active").siblings().removeClass("active");
  });

  $(".cards__tabs-trigger:first").click();

  //Bounse btn animation
  $(".cards__link").mouseenter(function () {
    Bounce($(this), 3, "15px", 300);
  });

  function Bounce(element, times, distance, speed) {
    for (let i = 0; i < times; i++) {
      element.animate({ marginTop: "-=" + distance }, speed).animate({ marginTop: "+=" + distance }, speed);
    }
  }

  //Rating stars hover
  $("#stars li")
    .on("mouseover", function () {
      const onStar = parseInt($(this).data("value"), 10);

      $(this).parent().children("li.star").each(function (e) {
          if (e < onStar) {
            $(this).addClass("hover");
          } else {
            $(this).removeClass("hover");
          }
        });
    })
    .on("mouseout", function () {
      $(this).parent().children("li.star").each(function (e) {
          $(this).removeClass("hover");
        });
    });

    //Rating stars select
    $("#stars li").on("click", function () {
      const onStar = parseInt($(this).data("value"), 10); 
      const stars = $(this).parent().children("li.star");

      for (i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass("selected");
      }

      for (i = 0; i < onStar; i++) {
        $(stars[i]).addClass("selected");
      }
    });
    
    $("#stars li:nth-child(4)").click()

    //rating changing according to star selected
    let ratingValue = 7.8;
    let counter = 1;
    let res = 0;
    $('.cards__game-rating-score').text(ratingValue);

    $('.cards__rating-circle--second').css('stroke-dashoffset', `calc(220 - (220 * ${ratingValue}) / 10)`);

    $("#stars li").on("click", function () {
      counter++
      const newRating = $(this).data("value") * 2;
      res += newRating;
      ratingValue = (7.8 + res) / counter;
      $('.cards__game-rating-score').text(ratingValue.toFixed(1));
      $('.cards__rating-circle--second').css('stroke-dashoffset', `calc(220 - (220 * ${ratingValue}) / 10)`);
    });
});
