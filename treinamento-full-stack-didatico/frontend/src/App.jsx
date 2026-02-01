import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

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

  return (
    <div className="app">
      <h1>{loading || message || error}</h1>
    </div>
  );
}

export default App;
