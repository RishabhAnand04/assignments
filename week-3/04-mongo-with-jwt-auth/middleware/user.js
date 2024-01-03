const jwt = require('jsonwebtoken');
const secret = 'jwt and mongo assignment';
// Middleware for handling auth
function userMiddleware(req, res, next) {
    const token = req.headers.Authorization;
    jwt.verify(token, secret, function(err, data){
        if(err)
            res.status(401).send("Unauthorized");
        else
            next();
    });
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;