//1) Create a npm project and install expressjs
const express = require('express');
//2) Creat an Express.js app which funnels requests through 2 middleware
// functions that log something to the console and return one response
const app = express();
//3) Handle requests to "/" and "/users" such that each request only has
// one handler middleware that does something with it(ie send dummy responses)
app.use('/users',(req,res,next) => {
	console.log('You should check out my sweet moves!');
	res.send('<h1>Our default users are Alpha, Echo, India, Oscar and Uniform</h1>');

});

app.use('/',(req,res,next) => {
	console.log('You should see me in the console');
	res.send('<h1>This is the assignment 2 default route!</h1>');
});
app.listen(3000);
