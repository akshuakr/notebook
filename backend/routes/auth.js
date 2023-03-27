const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require("express-validator");

// Create a user using: POST "api/auth/crateuser" . No Login Required
router.post('/createuser', 

    body('name', 'Name should be at least 3 characters long.').isLength({min : 3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password should be atleast 5 characters long.').isLength({min : 5}),
    async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //check if user with this email already exist
    try {
        let user = await User.findOne({email: req.body.email})
        if(user){
            return res.status(400).json({error: "Sorry, auser with this email already exist"});
        }
        user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        })
        res.json(user)
    } catch(error){
        console.error(error.message);
        res.status(500).send("Some Error Occured");
    }

    
})

module.exports = router;