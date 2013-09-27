
// -- Setup -- //
var express = require('express');
var app = express();

var http = require('http');

app.listen(3000);

// --- Routing --- //

app.get('/about', function(req,res){
 res.sendfile('public/about.html');
}); 

app.get('/contact', function(req,res){
 res.sendfile('public/contact.html');
}); 

app.get('/resume', function(req,res){
 res.sendfile('public/resume.html');
}); 

app.get('*', function(req, res) {
   res.send('404');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});