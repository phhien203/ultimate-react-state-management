import { useNetwork } from "./hooks/useNetwork";

export const usePicture = (date) => {
  const { data, loading } = useNetwork({
    url: `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`,
  });

  return { picture: data, loading };
};
