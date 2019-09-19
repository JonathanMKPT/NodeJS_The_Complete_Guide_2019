//1) Spin up a Nodejs driven sever on port 3000
const http = require('http');
const routes = require('./routes');
const server = http.createServer('routes'); 

//2) Handle 2 routes "/" and "/users"
	//-Return some greeting text on "/"
	//-Return a list of dummy users(<ul><li>User1</li></ul>)

//3)Add a form with a "username" <input> to the "/" page and submit a
//POST request to "/create-user" upon button click

//4)Add the "/create-user" route and pars the incoming data(ie username)
// and log it to the console.

server.listen(3000);
