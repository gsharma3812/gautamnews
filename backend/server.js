// Importing required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware configuration
app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // Parse incoming JSON requests

// MongoDB connection setup
const mongoURI = 'your_mongodb_connection_string_here'; // Replace with your MongoDB connection string
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Example route
app.get('/', (req, res) => {
    res.send('Welcome to the Gautam News API');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
