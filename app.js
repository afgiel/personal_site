
// -- Setup -- //
var express = require('express');
	app = express();

app.use(express.static(__dirname + '/public'))	

app.listen(8080);

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