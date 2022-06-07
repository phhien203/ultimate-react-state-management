import React from "react";
import "./App.css";
import { AppProvider } from "./appContext";
import { Content } from "./Content";
import { Sidebar } from "./Sidebar";

function App() {
  return (
    <AppProvider>
      <div>
        <Content />
        <Sidebar />
      </div>
    </AppProvider>
  );
}

export default App;
