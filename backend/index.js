require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 10000;

// Serve static frontend
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());

app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Fallback for SPA routing (optional)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
