const express = require('express')
const router = express.Router();


router.get('/',(req,res) =>{
	obj = {

		name : "arun",
		email : "arunsain3@gmail.com"
	}
	res.json(obj);
})

module.exports = router;