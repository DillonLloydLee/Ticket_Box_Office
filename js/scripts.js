// Ticket prototype :

function Ticket(title, date, time, price) {
  this.title = title;
  this.date = date;
  this.time = time;
  this.price = price;
}


// Sound effect :

var clickSound = new Audio("sounds/button.mp3");


// jQuery :

$(document).ready(function() {

  $(".time").click(function() {
    clickSound.play();
    if ($(".age-question").css('display') == 'none') {
      $(".age-question").toggle();
    }
  });

  $(".date").click(function() {
    clickSound.play();
    if ($(".movies-by-date").css('display') == 'none') {
      $(".movies-by-date").toggle();
    }
    $(".chosen-date").empty().val();
    $(".chosen-date").append($(this).clone());
  });

});
