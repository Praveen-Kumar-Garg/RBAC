// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const checkRole = require('../middleware/checkRole');
const { authenticateJWT } = require('../middleware/authenticateJWT');

// Admin-specific route
router.get('/', authenticateJWT, checkRole('Admin'), (req, res) => {
    res.send('Welcome to the Admin Dashboard');
});

module.exports = router;
