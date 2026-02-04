import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const EditMessage = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const loadingMessage = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(`http://localhost:3000/message/${id}`);
        if (!response.ok) {
          let serverMessage = "";
          try {
            const errData = await response.json();
            serverMessage = errData?.message || "";
          } catch (error) {}

          if (response.status === 404) {
            throw new Error(serverMessage || "Message not found");
          }

          throw new Error(
            serverMessage || `Request failed (${response.status})`,
          );
        }

        const data = await response.json();
        setName(data.name);
        setEmail(data.email);
      } catch (err) {
        console.log(err);
        setError(err.message || "Unexpected error");
      } finally {
        setLoading(false);
      }
    };

    loadingMessage();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/message/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const updated = await response.json();
      console.log(updated);

      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.message || "Unexpexted Error");
    }
  };

  return (
    <>
      <div>Edit Message</div>
      <div>
        {loading ? (
          <h1>loading ...</h1>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button>Submit</button>
          </form>
        )}
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to home
      </button>
    </>
  );
};

export default EditMessage;
