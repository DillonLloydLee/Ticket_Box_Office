// Tests for Ticket prototype :

describe("Ticket", function() {

  it("it creates a new ticket with certain properties.", function() {
    var testTicket = new Ticket("Rambo", "2015-09-16", "5:30pm", "$10.25");
    expect(testTicket.title).to.equal("Rambo");
    expect(testTicket.date).to.equal("2015-09-16");
    expect(testTicket.time).to.equal("5:30pm");
    expect(testTicket.price).to.equal("$10.25");
  });

});
