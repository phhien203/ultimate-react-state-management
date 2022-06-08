import React from "react";
import "./App.css";
import { useDarkMode } from "./useDarkMode";

function App() {
  let isDarkMode = useDarkMode();

  return (
    <div
      style={{
        height: 500,
        width: 500,
        color: isDarkMode ? "white" : "black",
        backgroundColor: isDarkMode ? "black" : "white",
      }}
    >
      Here's some content
    </div>
  );
}

export default App;
