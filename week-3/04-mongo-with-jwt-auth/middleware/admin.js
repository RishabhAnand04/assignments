const jwt = require('jsonwebtoken');
const secret = 'jwt and mongo assignment';

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    const token = req.headers.Authorization;
    jwt.verify(token, secret, function(err, data){
        if(err)
            res.status(401).send("Unauthorized");
        else
            next();
    })
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;