import { useState, useEffect } from "react";
import "../App.css";

function MessageList() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [list, setList] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [errorList, setErrorList] = useState("");

  const loadMessages = () => {
    setLoadingList(true);
    setErrorList("");

    fetch("http://localhost:3000/message")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        setList(data);
      })
      .catch((err) => {
        console.log(err);
        setErrorList(err.message);
      })
      .finally(() => {
        setLoadingList(false);
      });
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputName,
          email: inputEmail,
        }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const data = await response.json();

      setInputName("");
      setInputEmail("");

      loadMessages();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/message/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      loadMessages();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="app">
      <div>
        {loadingList ? (
          <h1>loading...</h1>
        ) : errorList ? (
          <h1>{errorList}</h1>
        ) : (
          <ul>
            {list.map((item) => (
              <li key={item.id}>
                <strong>{item.name}: </strong>
                {item.email}
                <button onClick={() => handleDelete(item.id)}>delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="name"
            onChange={(e) => setInputName(e.target.value)}
            value={inputName}
          />
          <input
            name="email"
            placeholder="email"
            onChange={(e) => setInputEmail(e.target.value)}
            value={inputEmail}
          />
          <button type="submit">Send datas</button>
        </form>
      </div>
    </div>
  );
}

export default MessageList;
