const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let dataFront = [];

app.get("/message", (req, res) => {
  res.json(dataFront);
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

app.get("/message/:id", (req, res) => {
  const data = req.params.id;
  const id = Number(data);

  console.log(id);

  const item = dataFront.find((item) => item.id === id);

  console.log(item);

  res.status(404).json({ message: "Message not found" });
  res.status(201).json({ ok: true });
  res.json(item);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
