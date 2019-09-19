// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var userData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================


module.exports = function(app) {
// API GET Requests
// Below code handles when users 'visit' a page.
// In each of the below cases when a user visits a link they are shown a JSON of the data in the table
// ---------------------------------------------------------------------------

app.get("/api/friends", function(req, res) {
    res.json(userData)
})

// API POST Requests
// Handles when user submits friend form.
// Compares user to existing users to find best friend.
// ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {

    // Store current user scores in array.
    var currentUserScores = req.body.scores;

}