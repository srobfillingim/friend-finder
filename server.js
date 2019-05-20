// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure the Express application
var app = express();
var PORT = process.env.PORT;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Parsing inccoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.text());

// Application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Listening on PORT
app.listen(PORT, function(){
    console.log('Friend Finder app is listening on PORT: ' + PORT);
});
