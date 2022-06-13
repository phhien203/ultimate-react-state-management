import { useCallback } from "react";
import { useState } from "react";
import "./App.css";
import { useComplete } from "./hooks/useComplete";

function App() {
  const [clicked, setClicked] = useState();
  const completeCallback = useCallback((data) => console.log(data), []);

  useComplete(completeCallback);

  return (
    <div onClick={() => setClicked(!clicked)}>
      hello! {clicked ? "clicked" : "not clicked"}
    </div>
  );
}

export default App;
