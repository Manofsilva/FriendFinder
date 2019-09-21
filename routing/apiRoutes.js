// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information.
// ===============================================================================

var userData = require("../app/data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/friends", function(req, res) {
      res.json(userData);
    });
  
    var comparisonUserTotalScore = 0;
  
    var friendScores = [];
  
  
    // API POST Requests
    // Handles when user submits friend form.
    // Compares user to existing users to find best friend.
    // Displays best friend in pop-up modal.
    // Adds new user to userData array.
    // ---------------------------------------------------------------------------
  
    app.post("/api/friends", function(req, res) {
  
      // Store current user scores in array.
      var currentUserScores = req.body.scores;
  
      console.log("Current user scores: " + currentUserScores);
  
      // Determine the user's most compatible friend.
      for (var i = 0; i < userData.length; i++) {
  
        // Convert each user's results in to an array of numbers.
        var comparisonUserScores = userData[i].scores;
  
        // Find total difference between current user and each user.
        comparisonUserTotalScore = calculateUserCompatibilityScore(currentUserScores, comparisonUserScores);
  
        // Build up array of user compatibility scores.
        friendScores.push(comparisonUserTotalScore);
  
      }
  
      console.log("Array of friend scores: " + friendScores);
  
      var index = 0;
      var value = friendScores[0];
  
      // Need to get index of lowest score.
      // Tried to use Math.min and it return NaN.
      // So went with tried and true vanilla.
      for (var i = 0; i < friendScores.length; i++) {
        console.log("Value of item in array: " + friendScores[i]);
        if (friendScores[i] < value) {
          value = friendScores[i];
          index = i;
        }
      }
  
      // OMG we are getting a best friend.
      console.log("Best friend name: " + userData[index].name);
  
      // Send best friend as a response so we can display in modal.
      res.send(userData[index]);
  
      // Push new user to user array.
      userData.push(req.body);
  
    });
  };
  
  var totalDifference = 0;
  
  // Find total difference between current user and another user.
  function calculateUserCompatibilityScore(currentUserScores, comparisonUserScores) {
  
    // Reset the total difference counter each time function called.
    totalDifference = 0;
  
    for (var i = 0; i < currentUserScores.length; i++) {
  
      totalDifference+=Math.abs(currentUserScores[i] - comparisonUserScores[i]);
    }
  
    console.log("Final total difference for friend: " + totalDifference);
  
    return totalDifference;
  };