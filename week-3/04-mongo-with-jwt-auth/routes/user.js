const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const db = require('../db/index')
const jwt = require('jsonwebtoken');
const secret = 'jwt and mongo assignment'

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const newUser = new db.User({
        username : req.body.username,
        password : req.body.password
    })
    newUser.save().then(()=>{
        res.status(201).json({message : "User created successfully"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send()
    });

});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    db.User.findOne({
        username : username
    }).then((user)=>{
        if(!user) res.status(404).send("user not found")
        if(password  == user.password){
            const token = jwt.sign(username , secret);
            res.status(200).json({token : token});
        }
        else{
            res.status(401).send("Unauthorized");
        } 
    }).catch((err)=>{
        console.log(err);
        res.status(500).send();
    })
});

router.get('/courses',userMiddleware, (req, res) => {
    // Implement listing all courses logic
    db.Course.find({}).then((data)=>{
        res.status(200).json({courses : data})
    })
});

router.post('/courses/:courseId', userMiddleware, function(req, res) {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    db.Course.findOne({id : courseId}).then((course)=>{
        db.User.findOneAndUpdate({
            username : req.headers.username,
            $push: {purchasedCourses : course}
        }).then((user)=>{
            res.status(201).json({ message: 'Course purchased successfully' });
        })
    });
    
    
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    db.User.findOne({
        username : req.headers.username
    }).then((user)=>{
        res.status(200).json({purchasedCourses : user.purchasedCourses})
    })
});

module.exports = router