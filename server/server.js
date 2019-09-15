const http = require('http');

const server = http.createServer((req,res) => {
	console.log(req.url,req.method,req.headers);
	//process.exit();
	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<head><title>My First Page in NodeJS</title></head>');
	res.write('<body><h1>Hello Jonathan, you will be a software engineer!</h1></body>');
	res.write('</html>');
	res.end();
});

server.listen(3000);
