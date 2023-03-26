const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    obj = {
        name: "akshu",
        age: 23,
        gender: 'Male'
    }
    res.json(obj)
})

module.exports = router;