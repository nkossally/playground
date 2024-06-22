import classNames from "classnames";

const OPTION_TO_LABEL = {
  "align-content-start": "start",
  "align-content-center": "center",
  "align-content-space-between": "space-between",
  "align-content-space-around": "space-around",
  "align-content-space-evenly": "space-evenly",
  "align-content-end ": "end",
};

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
              className={classNames(
                "option-button",
                currentOption === option ? "highlight" : ""
              )}
            >
              {OPTION_TO_LABEL[option] ? OPTION_TO_LABEL[option]: option}
            </button>
          );
        })}
      </div>
    </div>
  );
};
