// middleware/checkRole.js
function checkRole(role) {
    return (req, res, next) => {
        if (req.user && req.user.role === role) {
            return next();  // User has the correct role, continue
        }
        return res.status(403).send('Access Denied');  // Forbidden
    };
}

module.exports = checkRole;
