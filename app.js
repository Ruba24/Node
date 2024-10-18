console.log(`             __________________
            |                  |
            |      R U B A     |
            |__________________|
            `);
var figlet = require("figlet");

figlet("R U B A", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
figlet("HELLICOPTOR", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });


  
