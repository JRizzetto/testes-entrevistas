import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EditMessage = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    fetch(`http://localhost:3000/message/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        setName(data.name);
        setEmail(data.email);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <div>Edit Message</div>
      <div>
        <p>Name: {name}</p>
      </div>
      <div>
        <p>E-mail: {email}</p>
      </div>
    </>
  );
};

export default EditMessage;
