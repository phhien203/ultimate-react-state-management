import { useReducer } from "react";

const initialMessages = [
  { id: 1, content: "Hello there!", from: "me" },
  { id: 2, content: "How are you doing?", from: "Steven" },
  { id: 3, content: "Pretty Good", from: "me" },
];

const reducer = (state, action) => {
  switch (action.type) {
    
  }
};

const useChatReducer = () => useReducer(reducer, { messages: initialMessages });

