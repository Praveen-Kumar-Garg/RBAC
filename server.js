// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Initialize Express
const app = express();
dotenv.config();

// Middleware for parsing JSON
app.use(express.json());


// Login Route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    console.log('Received username:', username);  
    console.log('Received password:', password);  

    
    const mockUser = {
        username: 'testUser', 
        password: await bcrypt.hash('testPass', 10),  
        role: 'admin'
    };

    
    if (username.trim().toLowerCase() !== mockUser.username.toLowerCase()) {
        console.log('User not found');
        return res.status(400).send('User not found');
    }

    // Validate the password
    const validPassword = await bcrypt.compare(password, mockUser.password);
    if (!validPassword) {
        console.log('Invalid password');
        return res.status(400).send('Invalid password');
    }

    // Generate JWT Token
    const token = jwt.sign({ id: '12345', role: mockUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
