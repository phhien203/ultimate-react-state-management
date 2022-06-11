import React from "react";
import "./App.css";
import { useStorage } from "./hooks/useStorage";

function App() {
  const [count, setCount] = useStorage("count", 0);

  return <div onClick={() => setCount(count + 1)}>The count is: {count}</div>;
}

export default App;
