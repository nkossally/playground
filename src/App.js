import { useState } from "react";
import classNames from "classnames";
import { Options } from "./components/Options";

import "./style.scss";

const FLEX_DIRECTIONS =  ["row", "column"]

function App() {
  const [flexDirection, setFlexDirection] = useState(FLEX_DIRECTIONS[0]);

  const setFlexDirectionWrapper = (dir) => {
    return () => setFlexDirection(dir);
  };

  return (
    <div className="App">
      <Options title="flex-direction" options={FLEX_DIRECTIONS} setOption={setFlexDirection} />


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
