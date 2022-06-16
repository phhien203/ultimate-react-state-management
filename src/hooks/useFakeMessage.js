import { useEffect } from "react";

export const useFakeMessage = ({
  setMessages,
  message,
  from = "Test",
  timeout = 5000,
}) => {
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setMessages((messages) => [
        ...messages,
        { id: messages.length + 1, content: message, from },
      ]);
    }, timeout);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [setMessages, message, from, timeout]);
};
