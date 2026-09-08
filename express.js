const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// Same folder ki static files (CSS, Images, JS) serve karne ke liye
app.use(express.static(__dirname));

// 1. Home Page Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 2. Services Page Route
app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'services.html'));
});

// 3. Portfolio Page Route
app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio.html'));
});

// 4. Pricing Page Route
app.get('/pricing', (req, res) => {
  res.sendFile(path.join(__dirname, 'pricing.html'));
});

// 5. Contact Page Route
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// 6. 404 ERROR HANDLER (Ye tamam routes ke aakhir me hona zaroori hai)
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});