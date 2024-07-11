// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (e.g., your React app)
app.use(express.static(path.join(__dirname, 'client/build')));

// API endpoint to handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Here you can implement logic to store the contact form data in a database,
  // send an email notification, etc.

  console.log(`Received contact form submission: ${name}, ${email}, ${message}`);

  // For simplicity, just send a basic response
  res.json({ message: 'Contact form submission received!' });
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
