import { useState, useEffect, useRef } from "react";

export class Node {
  constructor() {
    this.children = [];
    this.parent = null;
  }
}

export const NodeWrapper = ({ node }) => {
  const [checkedState, setCheckedState] = useState(false);

  const ref = useRef(0);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = true;
    }
  }, [ref.current]);

  return (
    <div>
      <input type="checkbox" id="tree-select-input" ref={ref}></input>
      <div className="node-children">
        {node.children.map((child) => {
          return <NodeWrapper node={child} />;
        })}
      </div>
    </div>
  );
};
