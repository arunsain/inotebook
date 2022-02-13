const express = require('express')
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JSON_SEC_KEY = "arundev@code";


router.post('/createuser',[
   body('name','name must be  equal or greater than 5 ').isLength({ min: 5 }),
   body('password','password must be 5').isLength({ min: 5 }),
   body('email','email must be  valid').isEmail(),
], async (req,res) =>{

// this code run if request parameter fail in validation
   const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      
    //check weather user email already exit in database
    let checkUser = await User.findOne({email:req.body.email});
    if(checkUser){
     return  res.status(400).json({ message:"user already exist with this email"})

    }

    const  salt = await bcrypt.genSaltSync(10);
    const secPass = await bcrypt.hashSync(req.body.password, salt);

    // user create 
   const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });

    const userToken = {

     user :{
       id : user.id
     } 
    };
    
    const jwtToken = jwt.sign(userToken, JSON_SEC_KEY);

   return res.status(200).json({jwtToken});

  } catch (error) {

      console.log(error.message);
      res.status(500).send('some error occured');
  }
    
})

module.exports = router;