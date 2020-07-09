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

  const onPaste = event => {
    console.log(event.clipboardData.getData("Text"));
    const value = event.clipboardData.getData("Text");
    Array.from(value).forEach((v, index) => {
      if (index < inputRefs.current.length) {
        onChange(v, index);
      }
    });
  };

  const onChange = (value, index) => {
    inputRefs.current[index].value = value;
    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const onFocus = event => {
    event.target.select();
  };

  return (
    <div className="App">
      {[0, 1, 2, 3, 4].map(index => {
        return (
          <input
            required
            key={index}
            autoFocus={index === 0}
            onFocus={onFocus}
            maxLength="1"
            ref={setRefAtIndex(index)}
            onKeyPress={event => {
              onChange(event.target.value, index);
            }}
            onPaste={onPaste}
          />
        );
      })}
    </div>
  );
}
