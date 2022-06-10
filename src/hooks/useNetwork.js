import { useEffect, useState } from "react";

export const useNetwork = ({ url }) => {
  const [state, setState] = useState({ loading: true });

  useEffect(() => {
    setState({ loading: true });

    const makeRequest = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setState({ data, loading: false });
      } catch (error) {
        setState({ error, loading: false });
      }
    };

    makeRequest();
  }, [url]);

  return state;
};
