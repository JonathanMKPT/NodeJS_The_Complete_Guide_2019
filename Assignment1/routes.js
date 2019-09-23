//2) Handle 2 routes "/" and "/users"
	//-Return some greeting text on "/"
	//-Return a list of dummy users(<ul><li>User1</li></ul>)
//requiring file system for rouets
const fs = require('fs');

const requestHandler = (req, res) =>{
	const url = req.url;
	const method = req.method;
	if(url === '/') {
		res.write('<html>');
		res.write('<head><title>Jonathan\'s Assignment 1 Project></title></head>');
		res.write('<h1>Welcome to Jonathan\'s Assignment 1 Project for NodeJS</h1>');
		res.write('<body><form action="/users"><input type="text" name="users"><button>Submit</button></form></body>');
		res.write('</html>');
		return res.end();
	}
};

module.exports = requestHandler
