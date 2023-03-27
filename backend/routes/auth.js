const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'akshu';

router.post('/login',
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),

    async (req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {email, password} = req.body;

        try{
            let user = await User.findOne({email});
            if(!user){
                return res.status(400).json({error: "Please enter correct credentials."});
            }

            const passwordCompare = await bcrypt.compare(password, user.password);
            if(!passwordCompare){
                return res.status(400).json({ error: "Please enter correct credentials." });
            }

            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, JWT_SECRET);
            res.json({authToken});
        }
        catch(error){
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
)

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

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
        })

        const data = {
            user:{
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({authToken})
    } 
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

    
})

module.exports = router;