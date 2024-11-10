

const express = require('express');
const router = express.Router();
const checkRole = require('../middleware/checkRole');  // Middleware to check if the user has 'Editor' role

// Middleware to check if the user is an Editor
router.use(checkRole('Editor'));

// Example route accessible only by Editor
router.get('/', (req, res) => {
    res.send('Welcome, Editor! You can access editor-specific content.');
});

module.exports = router;
