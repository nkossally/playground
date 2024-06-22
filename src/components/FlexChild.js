import { useState, useMemo } from "react";

export const FlexChild = () => {
  const [flexGrow, setFlexGrow] = useState(0);
  const [flexShrink, setFlexShrink] = useState(1);
  const [flexBasis, setFlexBasis] = useState("auto");

  const handleFlexGrow = (e) => {
    setFlexGrow(e?.target?.value);
  };
  const handleFlexShrink = (e) => {
    setFlexShrink(e?.target?.value);
  };
  const handleFlexBasis = (e) => {
    setFlexBasis(e?.target?.value);
  };
  const style = useMemo(
    () => ({
      "flexGrow": `${flexGrow}`,
      "flexShrink": `${flexShrink}`,
      "flexBasis": `${flexBasis}`,
      height: "300px",
      border: "2px solid green",
      margin: "0px 5px 0px 5px",
      "backgroundColor": "#36d2df",
      "border-radius": 5,


    }),
    [flexGrow, flexShrink, flexBasis]
  );
  return (
    <div style={style}>
      <div className="input-label">flex grow</div>
      <input onChange={handleFlexGrow} placeholder="e.g. 0, 1" className="flex-input"/>
      <div>flex shrink</div>
      <input onChange={handleFlexShrink} placeholder="e.g. 0, 1" className="flex-input" />
      <div>flex basis</div>
      <input onChange={handleFlexBasis} placeholder="e.g. auto, 1000px" className="flex-input"/>
    </div>
  );
};
