import React, { useRef } from "react";
import "./styles.css";

export default function CodeInput({ length }) {
  const inputRefs = useRef([]);

  /*
    store a reference to our input field
  */
  const setRefAtIndex = idx => {
    return ref => {
      if (ref) {
        inputRefs.current[idx] = ref;
      }
    };
  };

  /*
    when the user pastes, split the string and place a value
    in each input
  */
  const onPaste = event => {
    console.log(event.clipboardData.getData("Text"));
    const value = event.clipboardData.getData("Text");
    Array.from(value).forEach((v, index) => {
      if (index < inputRefs.current.length) {
        onChange(v, index);
      }
    });
  };

  /*
    set the input value and jump to the next input in the list
  */
  const onChange = (value, index) => {
    inputRefs.current[index].value = value;
    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  /*
    auto-select the value in the input
  */
  const onFocus = event => {
    event.target.select();
  };

  return (
    <div className="App">
      {Array.from({ length }).map((_, index) => {
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
