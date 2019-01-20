// these are required for express to work, 
var express = require("express")

// we are setting a variable called app and saving express in it
var app = express();


// below is another requirement for the File System
var fs = require("fs");


// We could also listen to a port by declaring it on a variable such as follows
// however if we do that then we must ensure that when we listen, we must pass on the vaibale name
// "port" in this case
var port = 8000;


//  we need to let node know to use static content, this could be images, css or html. images should go in their own folder
// I think css should also go in its own folder
app.use(express.static(__dirname + "/static"));

// views is another folder within root directory that houses the html/webpage that we want to render
// however, we need to install ejs templating engine and save these "html/webpages" with ejs extension
app.set('views', __dirname + '/views');

// this where we let node know that we will be using EJS (enbedded javascript) templating engine
app.set('view engine', "ejs");


//  following are the routes that we will need to render, first line actually tells what is the url pattern
app.get("/bikes", function (request, response){
    // below render "bikes" is actually the name of the webpage that we will be rendering for the users to see
    response.render('bikes');
})
app.get("/horses", function (request, response){
    response.render('horses');
})

app.get("/horses/razor", function (request, response){
    var horse = [
        {name: "Razor", breed: "Arbian"},
        {height: "6.5 feets"},
        {speed: "fastest horse"}
    ];
    response.render('razor', {horse: horse});
})



app.get("/form", function (request, response){
    response.render('form');
})

//  we need to let the node know which port we want it to listen to, in this case it is 8000
//  however we can always change the port as per our requirement

app.listen(port, function(){
    console.log(`we are now listening on port no. ${port}`)
})



// this way can be used when you want to hard code the port no
// app.listen(8000, function (){
//     console.log("we are now listening on port 8000");
// })

