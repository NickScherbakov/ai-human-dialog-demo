const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
const PORT = 3000;

// Placeholder constants - replace with your actual DeepBrain AI credentials
const APP_ID = 'your-app-id-here';
const USER_KEY = 'your-user-key-here';

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Generate JWT endpoint
app.get('/generateJWT', (req, res) => {
  try {
    // Generate JWT token that expires in 5 minutes
    const token = jwt.sign(
      { 
        appId: APP_ID,
        iat: Math.floor(Date.now() / 1000)
      },
      USER_KEY,
      { expiresIn: '5m' }
    );

    res.json({
      appId: APP_ID,
      token: token
    });
  } catch (error) {
    console.error('Error generating JWT:', error);
    res.status(500).json({ error: 'Failed to generate JWT' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Remember to replace APP_ID and USER_KEY with your actual DeepBrain AI credentials');
});