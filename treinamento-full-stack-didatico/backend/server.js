const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let dataFront = [];

app.get("/ping", (req, res) => {
  res.send("Pong");
});

app.post("/message", (req, res) => {
  const { name, email } = req.body;

  const newDatas = {
    id: Date.now(),
    name,
    email,
  };
  dataFront.push(newDatas);

  res.status(201).json({ ok: true, data: newDatas });
});

app.get("/message", (req, res) => {
  res.json(dataFront);
});

app.delete("/message/:id", (req, res) => {
  req.params.id;
  const data = Number(req.params.id);
  const arrayLength = dataFront.length;

  dataFront = dataFront.filter((item) => item.id !== data);
  if (arrayLength === dataFront.length) {
    res.status(404).json({ error: "User don't found" });
    return;
  }

  return res.status(200).json({ ok: true });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
