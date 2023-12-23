const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:pass%40123@cluster0.cilzjtm.mongodb.net/').then(()=>{
    console.log("Database connection established")
}).catch((err)=>{
    console.log(err)
})

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  });

    const CourseSchema = new mongoose.Schema({
        id :{
            type: Number,
            unique : true,
        },
        title: String,
        description: String,
        price: Number, 
        imageLink: String,
        published : Boolean
    })
    const UserSchema = new mongoose.Schema({
        username: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
        },
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