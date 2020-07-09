import React, { useRef } from "react";
import "./styles.css";

export default function App() {
  const inputRefs = useRef([]);

  const setRefAtIndex = idx => {
    return ref => {
      if (ref) {
        inputRefs.current[idx] = ref;
      }
    };
  };

  const onChange = (value, index) => {
    console.log(value, index);
    // go to the next input
  };

  return (
    <div className="App">
      {[0, 1, 2, 3, 4].map(index => (
        <input
          maxLength="1"
          ref={setRefAtIndex(index)}
          onChange={event => {
            onChange(event.target.value, index);
          }}
        />
      ))}
    </div>
  );
}
