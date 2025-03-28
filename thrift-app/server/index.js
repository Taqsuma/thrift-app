const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Dummy POST route for login
app.post('/api/login', (req, res) => {
  console.log("Login Info:", req.body);
  res.send("Login received");
});

// Dummy POST route for register
app.post('/api/register', (req, res) => {
  console.log("Register Info:", req.body);
  res.send("Register received");
});

// Dummy GET route for search
app.get('/api/search', (req, res) => {
  console.log("Search Query:", req.query.q);
  res.send("Search received");
});

// Dummy GET route for profile
app.get('/api/user/:id', (req, res) => {
  console.log("User ID:", req.params.id);
  res.send("User profile received");
});

// Dummy product route
app.get('/api/product/:id', (req, res) => {
  res.json({
    id: req.params.id,
    name: "Vintage T-Shirt",
    price: 500,
    description: "Good condition, size M"
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
