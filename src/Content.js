import React from "react";
import { useAppContext } from "./appContext";

export const Content = () => {
  const { theme } = useAppContext();

  return (
    <div style={{ color: theme === "dark" ? "black" : "deeppink" }}>
      This is content
    </div>
  );
};
