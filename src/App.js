import { useState } from "react";
import classNames from "classnames";
import { Options } from "./components/Options";

import "./style.scss";

const FLEX_DIRECTIONS = ["row", "column"];
const CONTENT_JUSTIFICATIONS = ["start", "center", "end", "space-between", "space-around", "space-evenly"];

function App() {
  const [flexDirection, setFlexDirection] = useState(FLEX_DIRECTIONS[0]);
  const [justifyContent, setJustifyContent] = useState(CONTENT_JUSTIFICATIONS[0]);

  return (
    <div className="App">
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
      </div>

      <div className={classNames(flexDirection, justifyContent, "blocks")}>
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
  );
}

export default App;
