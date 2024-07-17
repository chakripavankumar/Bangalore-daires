const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

// Enable CORS for all origins
app.use(cors());

app.get('/api/ip', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.json({ ip });
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
