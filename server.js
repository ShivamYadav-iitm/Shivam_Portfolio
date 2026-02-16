require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const path = require('path');

// --- THE FIX IS HERE ---
// You must create 'app' BEFORE you use it!
const app = express(); 
// -----------------------

// Middleware (Now 'app' exists, so we can use it)
app.use(cors());
app.use(express.json());

// Serve Static Files (Frontend)
// This connects your 'public' folder to the internet
app.use(express.static(path.join(__dirname, 'public')));

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas (Cloud)'))
  .catch(err => console.log('❌ Cloud DB Error:', err));

// Routes
app.use('/api', apiRoutes);

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));