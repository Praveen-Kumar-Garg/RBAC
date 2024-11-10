// routes/guestRoutes.js
const express = require('express');
const router = express.Router();
const checkRole = require('../middleware/checkRole');
const { authenticateJWT } = require('../middleware/authenticateJWT');

// Guest-specific route
router.get('/', authenticateJWT, checkRole('Guest'), (req, res) => {
    res.send('Welcome to the Guest Dashboard');
});

module.exports = router;
