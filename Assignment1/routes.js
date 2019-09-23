//2) Handle 2 routes "/" and "/users"
	
	
//requiring file system for routes
const fs = require('fs');

const requestHandler = (req, res) =>{
	const url = req.url;
	const method = req.method;
	if(url === '/') {
		res.write('<html>');
		res.write('<head><title>Jonathan\'s Assignment 1 Project></title></head>');
		//-Return some greeting text on "/"
		res.write('<h1>Welcome to Jonathan\'s Assignment 1 Project for NodeJS</h1>');
		//3)Add a form with a "username" <input> to the "/" page and submit a
		//POST request to "/create-user" upon button click
		res.write('<body><form action="/users" action="POST"><input type="username" name="users"><button>Submit User</button></form></body>');
		res.write('</html>');
		return res.end();
	}

	if(url === '/users'){
		res.write('<html>');
		res.write('<h1>Here are our default users</h1>');
		//-Return a list of dummy users(<ul><li>User1</li></ul>)
		res.write('<body><ul><li>Alpha</li><li>Bravo</li><li>Charlie</li></ul></body>')
		res.write('</html>');
		
	}
	

};

module.exports = requestHandler
