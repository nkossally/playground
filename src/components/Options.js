import { useState } from "react";
import classNames from "classnames";

export const Options = ({ title, options, setOption, currentOption }) => {
  const setOptionWrapper = (option) => {
    return () => setOption(option);
  };

  return (
    <div className="options-container">
      <div className="option-title"> {title}</div>
      <div className="options-buttons">
        {options.map((option, idx) => {
          return (
            <button
              key={`${options}${idx}`}
              onClick={setOptionWrapper(option)}
              className={classNames("option-button", currentOption === option ? "highlight" : "" )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};
