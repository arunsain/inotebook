const express = require('express')
const router = express.Router();
const Notes = require("../models/Notes");
const fetchUser = require("../middleware/fetchUser");
const { body, validationResult } = require("express-validator");




router.get('/fetchallnotes',fetchUser, async (req,res) =>{

const notes = await	Notes.find({user:req.user.id});
	obj = {

		name :req.user.id,
		email : notes
	}
	res.json(obj);
})


router.post(
	"/addnotes",
	[
	  body("title", "title must be 5 characer").isLength({ min: 5 }),
	  body("description", "description must be 5 characer").isLength({ min: 5 }),
	 
	],fetchUser,
	async (req, res) => {
	  // this code run if request parameter fail in validation
	  const errors = validationResult(req);
	  if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	  }
  const {title,description,tags }= req.body;
	  try {
	
		//  create user notes
		const note = await Notes.create({
			user: req.user.id,
			title: title,
			description: description,
			tags: tags,
		});
  
		note.save();
  
		
  
		return res.status(200).json({ note });
	  } catch (error) {
		console.log(error.message);
		res.status(500).send("some error occured");
	  }
	}
  );
  

module.exports = router;