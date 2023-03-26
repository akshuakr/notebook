const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require("express-validator");

router.post('/', 

    body('name', 'Name should be at least 3 characters long.').isLength({min : 3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password should be atleast 5 characters long.').isLength({min : 5}),
    (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
    }).then((user) => res.json(user))
    .catch(err=> console.log(err));
})

module.exports = router;