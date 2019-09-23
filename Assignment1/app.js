//1) Spin up a Nodejs driven sever on port 3000
const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes); 





server.listen(3000);
