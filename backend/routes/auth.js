const express = require('express')
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');


router.post('/',[
   body('name','name must be  equal or greater than 5 ').isLength({ min: 5 }),
   body('password','password must be 5').isLength({ min: 5 }),
   body('email','email must be  valid').isEmail(),
],(req,res) =>{


   const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }).then(user => res.json(user))
    .catch(err => {console.log(err)
      res.json({ error:"please enter unique email" , message: err.message})
    });
 
// const user = User(req.body);
// user.save();
//    res.send(user)
})

module.exports = router;