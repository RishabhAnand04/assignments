const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('uri').then(()=>{
    console.log("Database connection established")
}).catch((err)=>{
    console.log(err)
})

// Define schemas
const AdminSchema = new mongoose.Schema({
    username : String,
    password : String
  });

    const CourseSchema = new mongoose.Schema({
        id :Number,
        title: String,
        description: String,
        price: Number, 
        imageLink: String,
        published : Boolean
    })
    const UserSchema = new mongoose.Schema({
        username : String,
        password : String,
        purchasedCourses : [CourseSchema]
    });
    
    const Admin = mongoose.model('Admin', AdminSchema);
    const User = mongoose.model('User', UserSchema);
    const Course = mongoose.model('Course', CourseSchema);
    
    
    module.exports = {
    Admin,
    User,
    Course,
}