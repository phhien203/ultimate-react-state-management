import React from "react";

function Input({ value, onChange, onEnter }) {
  return (
    <textarea
      value={value}
      style={{ padding: 12 }}
      onChange={(e) => onChange(e.target.value)}
      onKeyUp={(e) => (e.keyCode === 13 ? onEnter(e.target.value) : null)}
    />
  );
}

export default Input;
