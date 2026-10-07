const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// Same folder ki static files (CSS, Images, JS) serve karne ke liye
app.use(express.static(__dirname));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'services.html'));
});

app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio.html'));
});

app.get('/pricing', (req, res) => {
  res.sendFile(path.join(__dirname, 'pricing.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// 404 Error Handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});