import { useFakeMessage } from "./useFakeMessage";

export const useFakeConvo = (setMessages) => {
  useFakeMessage({
    setMessages,
    message: "This is cool",
    timeout: 1000,
  });

  useFakeMessage({
    setMessages,
    message: "I know, right?",
    from: "me",
    timeout: 3000,
  });

  useFakeMessage({
    setMessages,
    message: "So what should we do now...",
  });

  useFakeMessage({
    setMessages,
    message: "I guess we should test scroll position",
    from: "me",
    timeout: 5500,
  });
};
