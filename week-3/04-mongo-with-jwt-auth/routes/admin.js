const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require('jsonwebtoken');
const secret = 'jwt and mongo assignment';
const db =require('../db/index');

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const newAdmin = new db.Admin({
        username : req.body.username,
        password : req.body.password
    })
    newAdmin.save().then(()=>{
        res.status(201).json({message : "Admin created successfully"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send()
    });
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    db.Admin.findOne({
        username : username
    }).then((admin)=>{
        if(!admin) res.status(404).send("Admin not found")
        if(password  == admin.password){
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

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const newCourse = new db.Course({
        id : new Date().getTime(),
        title: req.body.title,
        description : req.body.description,
        price : req.body.price,
        imageLink : req.body.imageLink,
        published : req.body.published
    })
    newCourse.save().then((data)=> res.status(201).json({message : "Course created successfully", courseId:  data.id}))
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    db.Course.find({}).then((data)=>{
        res.status(200).json({courses : data})
    })
});

module.exports = router;