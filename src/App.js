import "./App.css";
import { useReducer } from "react";

export function reducer(state, action) {
  switch (action.type) {
    case "buttonClick":
      return { ...state, count: state.count + 1 };
    case "updateUserName":
      return { ...state, userName: action.userName };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, userName: "" });

  return (
    <div>
      <button onClick={() => dispatch({ type: "buttonClick" })}>
        Click me
      </button>
      <p>Your current count is {state.count}</p>
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: "updateUserName", userName: e.target.value })
        }
      />
      <p>Your user name is {state.userName}</p>
    </div>
  );
}

export default App;
