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

  $(".time").click(function() {
    clickSound.play();
    if ($(".age-question").css('display') == 'none') {
      $(".age-question").toggle();
    }
    $(".new-time").append("<div class='invisible'><div class='form-group'><input type='int' class='form-control' id='new-time' value='" + ($(this).clone()) + "'></div></div>");
  });

  $(".date").click(function() {
    clickSound.play();
    if ($(".movies-by-date").css('display') == 'none') {
      $(".movies-by-date").toggle();
    }
    $(".chosen-date").empty().val();
    $(".chosen-date").append($(this).clone());
    $(".new-date").append("<div class='invisible'><div class='form-group'><input type='int' class='form-control' id='new-date' value='" + ($(this).clone()) + "'></div></div>");
  });

  $("form#new-ticket").submit(function(event) {
    clickSound.play();
    event.preventDefault();

    var newName = $("input#new-name").val();
    var newAge = $("input#new-age").val();
    var newPrice = "";
    var newTitle = "";
    var newDate = $("input#new-date").val();
    var newTime = $("input#new-time").val();

    if (newAge < 16) {
      var newPrice = "$7.75";
    } else if (newAge > 55) {
      var newPrice = "$8.25";
    } else {
      newPrice = "9.75";
    }

    var ticket = new Ticket(newTitle, newName, newDate, newTime, newPrice);
    $(".final-name").empty().val();
    $(".final-name").append(ticket.buyerName);
    $(".final-title").empty().val();
    $(".final-title").append(ticket.movieTitle);
    $(".final-date").empty().val();
    $(".final-date").append(ticket.movieDate);
    $(".final-time").empty().val();
    $(".final-time").append(ticket.movieTime);
    $(".final-price").empty().val();
    $(".final-price").append(ticket.ticketPrice);

    $(".movie-data").slideToggle();
    $(".age-question").toggle();
    $(".final-ticket").slideToggle();
  });

  $("form#start-over").submit(function(event) {
    clickSound.play();
    event.preventDefault();

    if ($(".movies-by-date").css('display') != 'none') {
      $(".movies-by-date").toggle();
    }
    if ($(".age-question").css('display') != 'none') {
      $(".age-question").toggle();
    }
    $(".final-ticket").toggle();
    $(".movie-data").slideToggle();
  });
});
