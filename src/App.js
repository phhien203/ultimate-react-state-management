import React from "react";
import { useState } from "react";
import Message from "./Message";
import "./App.css";

const styles = {
  wrapper: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  container: {
    display: "flex",
    overflow: "scroll",
    height: "max-content",
    flexDirection: "column",
  },
};

const initialMessages = [
  { id: 1, content: "Hello there!", from: "me" },
  { id: 2, content: "How are you doing?", from: "Steven" },
  { id: 3, content: "Pretty Good", from: "me" },
];

function App() {
  const [messages, setMessages] = useState(initialMessages);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
}

export default App;
