// Ticket prototype :

function Ticket(movieTitle, buyerName, movieDate, movieTime, ticketPrice) {
  this.movieTitle = movieTitle;
  this.buyerName = buyerName;
  this.movieDate = movieDate;
  this.movieTime = movieTime;
  this.ticketPrice = ticketPrice;
}


// Sound effect :

var clickSound = new Audio("sounds/button.mp3");


// jQuery :

$(document).ready(function() {

  var newTime = $(".time").click(function() {
    clickSound.play();
    if ($(".age-question").css('display') == 'none') {
      $(".age-question").toggle();
    }
    return this;
  });

  var newDate = $(".date").click(function() {
    clickSound.play();
    if ($(".movies-by-date").css('display') == 'none') {
      $(".movies-by-date").toggle();
    }
    $(".chosen-date").empty().val();
    $(".chosen-date").append($(this).clone());
    return this;
  });

  $("form#new-ticket").submit(function(event) {
    clickSound.play();
    event.preventDefault();

    var newName = $("input.new-name").val();
    var newAge = $("input.new-age").val();
    var newPrice = "";
    var newTitle = "";


    var ticket = new Ticket(newTitle, newName, newDate, newTime, newPrice);
    $(".new-name").append(ticket.buyerName);
    $(".new-title").append(ticket.movieTitle);
    $(".new-date").append(ticket.movieDate);
    $(".new-time").append(ticket.movieTime);
    $(".new-price").append(ticket.ticketPrice);

    $(".movie-data").slideToggle();
    $(".age-question").toggle();
    $(".final-ticket").slideToggle();
  });
});
