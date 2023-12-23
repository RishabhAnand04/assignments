const db = require('./../db/index')
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    username = req.headers.username;
    password = req.headers.password;
    db.Admin.findOne({username : username}).then((admin)=>{
        console.log(admin)
        if(!admin){
            res.status(404).send("Admin not found")
            return;
        }
        if(password == admin.password)
            next();
        else{
            res.status(401).send("Unauthorized")
        }
    }).catch((err)=>{
        res.status(500).send()
    })
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;