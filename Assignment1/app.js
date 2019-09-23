//1) Spin up a Nodejs driven sever on port 3000
const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes); 



//4)Add the "/create-user" route and pars the incoming data(ie username)
// and log it to the console.

server.listen(3000);
