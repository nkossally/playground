import { useState } from "react";
import classNames from "classnames";

export const Options = ({title, options, setOption}) => {

  const setOptionWrapper = (option) => {
    return () => setOption(option);
  };

console.log(options)
  return (
    <div className="options-container">
        <div className="option-title"> {title}</div>
      <div className="options-buttons">
        {options.map((option) => {
          return <button onClick={setOptionWrapper((option))} className={classNames("option-button")}>{option}</button>;
        })}
      </div>
    </div>
  );
};
