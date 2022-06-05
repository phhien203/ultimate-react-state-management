import "./App.css";
import { useState } from "react";
import { Status } from "./Status";

function App() {
  const [messages, setMessages] = useState(["message 1", "message 2"]);

  return (
    <div>
      <Status onEnter={(e) => setMessages([e, ...messages])} />
      <ul>
        {messages.map((msg) => (
          <li key={msg}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
