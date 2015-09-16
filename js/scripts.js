// Ticket prototype :

function Ticket(title, date, time, price) {
  this.title = title;
  this.date = date;
  this.time = time;
  this.price = price;
}


// Sound effect :

var pinSound = new Audio("sounds/pin_drop.mp3");


// jQuery :

$(document).ready(function() {

  $(".date").click(function() {
    $(".age-question").toggle();
    pinSound.play();
  });

});
