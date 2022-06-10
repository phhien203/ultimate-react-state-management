import React, { useState } from "react";
import "./App.css";
import { usePicture } from "./usePicture";

function App() {
  const [date, setDate] = useState(`2020-06-09`);
  const { picture, loading } = usePicture(date);
  console.log(picture);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <input
        type="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <h2>{picture.title}</h2>
      <p>{picture.explanation}</p>
      <img src={picture.url} alt={picture.title} />
    </div>
  );
}

export default App;
