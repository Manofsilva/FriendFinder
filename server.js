// import express so that we can utilize the framework for all of our server needs
var express = require('express');

// Create an instance of an express application so that we can use the mryiad of methods that comes with the web framework
var app = express();

// Set the PORT number so that the client knows where to find the application 
// If we're in the production environment, use process.env.PORT (this is provided via heroku), else use PORT 8080 (http://localhost:8080) when in the development environment
var PORT = process.env.PORT || 4000;

// use the express app to start the server
app.listen(PORT, function(){
    console.log('App listening on PORT: ', PORT);
})