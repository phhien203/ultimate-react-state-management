import { useMemo } from "react";
import { useNetwork } from "./hooks/useNetwork";

export const usePicture = (date) => {
  const requestOptions = useMemo(
    () => ({
      url: `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`,
    }),
    [date]
  );

  const { data, loading } = useNetwork(requestOptions);

  return { picture: data, loading };
};
