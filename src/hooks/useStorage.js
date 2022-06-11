import { useEffect, useState } from "react";

export const useStorage = (key, initialState) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const existingState = localStorage.getItem(key);

    if (existingState) {
      setState(JSON.parse(existingState));
    }
  }, [key]);

  return [
    state,
    (state) => {
      setState(state);
      localStorage.setItem(key, JSON.stringify(state));
    },
  ];
};
