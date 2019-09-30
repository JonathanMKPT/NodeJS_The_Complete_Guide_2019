const express = require('express');

const app = express();

app.use((req,res, next) => {
	console.log("this is inside the middleware");
	next(); //Allows request to go into the next middle ware


});

app.use((req,res, next) => {
	console.log("this is inside another middleware");
	res.send('<h1>Hello from express!</h1>');
	
});

app.listen(3000);
