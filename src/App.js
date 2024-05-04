import { useState } from "react";
import classNames from "classnames";

import "./style.scss";

const FLEX_DIRECTIONS = { row: "row", col: "col" };

function App() {
  const [flexDirection, setFlexDirection] = useState(FLEX_DIRECTIONS.row);

  const setFlexDirectionWrapper = (dir) => {
    return () => setFlexDirection(dir);
  };

  return (
    <div className="App">
      <div className={"toggle-container"}>
        <button className="toggle-button" onClick={setFlexDirectionWrapper(FLEX_DIRECTIONS.row)}>
          row
        </button>
        <button className="toggle-button" onClick={setFlexDirectionWrapper(FLEX_DIRECTIONS.col)}>
          col
        </button>
      </div>

      <div></div>

      <div className={classNames(flexDirection, "blocks")}>
        <div className="block">  </div>
        <div className="block">  </div>
        <div className="block">  </div>
      </div>
    </div>
  );
}

export default App;
