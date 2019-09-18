// import express so that we can utilize the framework for all of our server needs
var express = require('express');

// Create an instance of an express application so that we can use the mryiad of methods that comes with the web framework
var app = express();

// Set the PORT number so that the client knows where to find the application 
// If we're in the production environment, use process.env.PORT (this is provided via heroku), else use PORT 8080 (http://localhost:8080) when in the development environment
var PORT = process.env.PORT || 4000;

// MIDDLEWARE FUNCTIONS
// Sets up the Express app to handle data parsing
// Responsible for parsing incoming data in the form of a POST request
// When parsed, the incoming data is fed to the Req.Body object
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import the function in the htmlRoutes.js and immediately invoke it and pass in the express app object
require('./routing/htmlRoutes.js')(app);
// require('./routing/apiRoutes.js')(app);

// use the express app to start the server
app.listen(PORT, function(){
    console.log('App listening on PORT: ', PORT);
})