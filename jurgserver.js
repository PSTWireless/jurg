var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

var tools = require('./lib/tools');
console.log('type of tools ' + typeof tools.hello); // => 'function'
console.log("the message returned is " + tools.msg('Molly'));

var fortuneCookies = [
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple.",
];

app.get('/', function(req, res) {
res.sendfile('public/index.html');
//	res.render('home');
});
app.get('/about', function(req,res){
	var randomFortune = 
		fortuneCookies[Math.floor(Math.random() * fortuneCookies.length)];
	res.render('about', { fortune: randomFortune });
});

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' + 
    app.get('port') + '; press Ctrl-C to terminate.' );
});

