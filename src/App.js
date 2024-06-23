import { useState, useMemo, useEffect } from "react";
import classNames from "classnames";
import { Options } from "./components/Options";
import { FlexChild } from "./components/FlexChild";
import "./style.scss";

const FLEX_DIRECTIONS = ["row", "column"];
const CONTENT_JUSTIFICATIONS = [
  "start",
  "center",
  "end",
  "space-between",
  "space-around",
  "space-evenly",
];
const CONTENT_ALIGNMENTS = [
  "start",
  "center",
  "end ",
  "space-between",
  "space-around",
  "space-evenly",
];

function App() {
  const [flexDirection, setFlexDirection] = useState(FLEX_DIRECTIONS[0]);
  const [justifyContent, setJustifyContent] = useState(
    CONTENT_JUSTIFICATIONS[0]
  );
  const [alignContent, setAlignContent] = useState(CONTENT_ALIGNMENTS[0]);


  const blocksContainerStyle = useMemo(
    () => ({
      display: "flex",
      "backgroundColor": "#df4336",
      border: "1px solid #36d2df",
      width: "calc(50% - 20px)",
      height: "400px",
      "flexDirection": flexDirection,
      "justifyContent": justifyContent,
      "alignContent": alignContent,
      //  align-content property is not possible when flex-wrap is no wrap
      "flexWrap": "wrap",
    }),
    [flexDirection, justifyContent, alignContent]
  );

  return (
    <div className="App">
      <div className="flex-alignments-section">
        <div className="all-options-container">
          <Options
            title="flex-direction"
            options={FLEX_DIRECTIONS}
            setOption={setFlexDirection}
            currentOption={flexDirection}
          />
          <Options
            title="justify-content"
            options={CONTENT_JUSTIFICATIONS}
            setOption={setJustifyContent}
            currentOption={justifyContent}
          />
          <Options
            title="align-content"
            options={CONTENT_ALIGNMENTS}
            setOption={setAlignContent}
            currentOption={alignContent}
          />
        </div>

        <div
          style={blocksContainerStyle}
        >
          <div className="block" key="block1">
            {" "}
          </div>
          <div className="block" key="block2">
            {" "}
          </div>
          <div className="block" key="block3">
            {" "}
          </div>
        </div>
      </div>
      <div className="flex-parent">
        <FlexChild />
        <FlexChild />
        <FlexChild />
      </div>
    </div>
  );
}

export default App;
