var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{ 'Content-Type': 'text/plain'});
	res.end('Hello World');
}).listen(3500);

console.log('Server started on localhost: 3500; press Ctl-C to terminate...');
