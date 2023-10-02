const express = require("express");
const path = require('path');

const app = express();
const distPath = path.join(process.cwd(), 'dist');
app.use(express.static(distPath));

app.get("/", (req, res) => {
  const home = path.join(distPath, 'index.html');
  res.sendFile(home);
});

const PORT = 9000
app.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT);
});