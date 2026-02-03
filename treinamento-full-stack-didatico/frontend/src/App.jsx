import { Routes, Route } from "react-router-dom";
import MessageList from "./pages/MessageList";
import EditMessage from "./pages/EditMessage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MessageList />} />
        <Route path="/edit/:id" element={<EditMessage />} />
      </Routes>
    </>
  );
};

export default App;
