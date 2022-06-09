import { useEffect, useState } from "react";

export const fetchPicture = async (date, setPicture) => {
  try {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
    );
    const json = await res.json();
    setPicture(json);
  } catch (err) {
    console.log(err);
  }
};

export const usePicture = (date) => {
  const [picture, setPicture] = useState();

  useEffect(() => {
    fetchPicture(date, setPicture);
  }, [date]);

  return picture;
};
