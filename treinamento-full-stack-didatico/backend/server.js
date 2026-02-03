const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let dataFront = [
  {
    id: 1770130787796,
    name: "Jefferson Rizzetto",
    email: "jeffersonrizzetto@gmail.com",
  },
  {
    id: 1770130795092,
    name: "James Bond",
    email: "james@gmail.com",
  },
  {
    id: 1770130808907,
    name: "janaina",
    email: "janaina@gmail.com",
  },
];

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

  const item = dataFront.find((item) => item.id === id);

  if (!item) {
    res.status(404).json({ message: "not Found" });
    return;
  }

  return res.status(200).json(item);
});

app.put("/message/:id", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const id = Number(req.params.id);
  let found = false;

  if (!name || !email) {
    res.status(400).json({ message: "Input can't be empty" });
    return;
  }

  const newArray = dataFront.map((e) => {
    if (e.id === id) {
      found = true;
      return {
        ...e,
        name,
        email,
      };
    }
    return e;
  });

  if (found === false) {
    res.status(404).json({ message: "Message not found" });
    return;
  }

  let updatedItem = newArray.find((e) => e.id === id);

  dataFront = newArray;
  return res.status(200).json(updatedItem);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
