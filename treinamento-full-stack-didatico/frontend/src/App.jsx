import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    fetch("http://localhost:3000/ping")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }

        return response.text();
      })
      .then((data) => {
        setMessage(data.message || data);
      })
      .catch((err) => {
        console.log("Error: ", err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputName,
          email: inputEmail,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="app">
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <h1>{message}</h1>
      )}
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

export default App;
