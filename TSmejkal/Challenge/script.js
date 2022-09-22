function atmMachine(amount) {
  let hundredNote = amount / 100;
  let fiftyNote = (amount % 100) / 50;
  let twentyNote = ((amount % 100) % 50) / 20;
  let tenNote = (((amount % 100) % 50) % 20) / 10;

  console.log("Notes for total amount of " + amount + " Euro(s)");
  console.log("100 Euro Note(s): " + Math.floor(hundredNote));
  console.log("50 Euro Note(s): " + Math.floor(fiftyNote));
  console.log("20 Euro Note(s): " + Math.floor(twentyNote));
  console.log("10 Euro Note(s): " + Math.floor(tenNote));
}

atmMachine(280);
