const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("Pong");
});

app.post("/message", (req, res) => {
  req.body.json({ ok: true });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
