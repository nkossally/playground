import { useState, useEffect, useRef } from "react";

export class Node {
  constructor() {
    this.children = [];
    this.parent = null;
    this.defaultChecked = false;
    this.checked = false;
  }

  setChecked = (bool) =>{
    console.log("pizza")
    this.checked = bool;
  }

}  




export const NodeWrapper = ({ node, initialCheckedState }) => {
  const [checkedState, setCheckedState] = useState(initialCheckedState);
  const [count, setCount] = useState(0);

  console.log(node.checked)

  const ref = useRef(0);



  const handleClick = () => {

    const passDownState = (root, bool) =>{

      root.checked = bool
      setCount(count + 1)

      console.log(root)

      root.children.forEach(child =>{
        passDownState(child, bool)
      })
    }
    // passDownState(node, !checkedState)
    passDownState(node, !node.checked)

  }

  useEffect(() => {
    console.log("whate")
    // node.checked = checkedState
  }, [node.defaultChecked, node.checked, count]);

  useEffect(() => {
  }, [node.checked]);

  return (
    <div>
      <input
        type="checkbox"
        // id="tree-select-input"
        defaultChecked={node.defaultChecked}
        checked={node.checked}
        onClick={handleClick}
        ref={ref}
      ></input>
      <div className="node-children">
        {node.children.map((child, i) => {
          return <NodeWrapper node={child} key={`child-${i}`}/>;
        })}
      </div>
    </div>
  );
};
