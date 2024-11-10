// routes/viewerRoutes.js
const express = require('express');
const router = express.Router();
const checkRole = require('../middleware/checkRole');
const { authenticateJWT } = require('../middleware/authenticateJWT');

// Viewer-specific route
router.get('/', authenticateJWT, checkRole('Viewer'), (req, res) => {
    res.send('Welcome to the Viewer Dashboard');
});

module.exports = router;
