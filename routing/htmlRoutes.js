var path = require('path');

module.exports = function(app){
// set up the root  routes
// TODO: setup  all routes here that will send to their corresponding html files
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

}