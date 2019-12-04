const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/',(req, res, next) => {
	//abs path for linux and windows systems
	res.sendFile(path.join(rootDir, 'views', 'shop.html')); 	
});



module.exports = router