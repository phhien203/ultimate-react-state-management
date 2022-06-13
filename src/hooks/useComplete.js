import { useEffect } from "react";

export const useComplete = (completedRequest) => {
  useEffect(() => {
    completedRequest();
  }, [completedRequest]);
};
