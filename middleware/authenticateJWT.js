// middleware/authenticateJWT.js
const jwt = require('jsonwebtoken');

// JWT Authentication Middleware
function authenticateJWT(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.sendStatus(403);  // Forbidden if no token
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403);  // Forbidden if token is invalid
        }
        req.user = user;  // Attach user data to the request object
        next();
    });
}

module.exports = { authenticateJWT };
