var http = require('http');

var fs = require('fs');

var server = http.createServer(function (request, response){
	console.log('client request URL: ', request.url);
	if(request.url ==='/') {
		fs.readFile('index.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	} else if(request.url === '/css/bootstrap.min.css'){
		fs.readFile('./css/bootstrap.min.css', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
		});
	}else if(request.url === '/css/agency.css'){
		fs.readFile('./css/agency.css', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
		});
	} else if(request.url === '/font-awesome/css/font-awesome.min.css'){
		fs.readFile('./font-awesome/css/font-awesome.min.css', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
		});
	}else if(request.url === 'js/jquery.js'){
		fs.readFile('./js/jquery.js', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/javascript'});
			response.write(contents);
			response.end();
		});
	}else if(request.url === '/js/bootstrap.min.js'){
		fs.readFile('./js/bootstrap.min.js', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/javascript'});
			response.write(contents);
			response.end();
		});
	}else if(request.url === '/js/classie.js'){
		fs.readFile('./js/classie.js', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/javascript'});
			response.write(contents);
			response.end();
		});
	}else if(request.url === '/js/cbpAnimatedHeader.js'){
		fs.readFile('./js/cbpAnimatedHeader.js', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/javascript'});
			response.write(contents);
			response.end();
		});
	}else if(request.url === '/js/jqBootstrapValidation.js'){
		fs.readFile('./js/jqBootstrapValidation.js', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/javascript'});
			response.write(contents);
			respone.end
		})
	}

	else {
		response.writeHead(404);
		response.end('File not found!!');
	}
});

server.listen(6789);

console.log("running in localhost at port 6789");