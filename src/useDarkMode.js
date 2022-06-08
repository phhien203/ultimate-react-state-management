import { useEffect, useState } from "react";

const initialDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

export const useDarkMode = () => {
  const [dark, setDark] = useState(initialDark);

  const listener = (event) => {
    console.log(event.matches);
    setDark(event.matches);
  };

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", listener);

    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", listener);
  }, []);

  return dark;
};
