const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const db = require("../db/index");

// Admin Routes

router.post('/signup', (req, res) => {
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