const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock notification data
const notifications = {
    network: 35,
    jobs: 10,
    messaging: 5,
    notifications: 2,
};

// Define a route to get notifications
app.get('/notifications', (req, res) => {
    res.json(notifications);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
