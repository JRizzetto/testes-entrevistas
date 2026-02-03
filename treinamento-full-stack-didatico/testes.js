const arrayObj = [
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

const arraymap = arrayObj.map((e) => {
  id = 177013078779;
  const name = "lucas";
  const email = "lucas@gmail.com";

  if (id === e.id) {
    return {
      ...e,
      name,
      email,
    };
  } else {
    throw new Error(`ID não encontrado`);
  }

  return e;
});

console.log(arraymap);
