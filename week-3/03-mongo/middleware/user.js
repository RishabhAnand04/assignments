const db = require("../db/index")
function userMiddleware(req, res, next) {
    username = req.headers.username;
    password = req.headers.password;
    console.log(username, password)
    db.User.findOne({username : username}).then((user)=>{
        if(!user){
            res.status(404).send("User not found")
            return;
        }
        if(password == user.password)
            next();
        else{
            res.status(401).send("Unauthorized")
        }
    }).catch((err)=>{
        res.status(500).send()
    })
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;