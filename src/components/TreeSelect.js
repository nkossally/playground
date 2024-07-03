import { useState, useEffect, useRef } from "react";

export class Node {
  constructor(val) {
    this.children = [];
    this.parent = null;
    this.checked = false;
    this.ref = undefined;
    this.val = val;
  }

}  




export const NodeWrapper = ({ node }) => {
  const [count, setCount] = useState(0);

  const ref = useRef(0);
  node.ref = ref;

  const checkAllChildren = (root) =>{
    let childUnchecked = false

    const helper = (currNode) =>{
      currNode.children.forEach(child =>{
        if(!child.checked){
          childUnchecked = true
        }
        checkAllChildren(child)
      })
    }

    helper(root)


    if(root.checked){
      if(childUnchecked){
        console.log("setting indeterminate", root.val)
        root.ref.current.indeterminate = true;
      } else{
        console.log("setting not indeterminate", root.val)

        root.ref.current.indeterminate = false;
      }
    }

  }

  const passUp = (root) => {
    if(!root) return;
    console.log(root)

    checkAllChildren(root)

    passUp(root.parent)
  } 

  const passDownState = (root, bool) =>{

    root.checked = bool
    root.ref.current.indeterminate = false;

    setCount(count + 1)

    root.children.forEach(child =>{
      passDownState(child, bool)
    })
  }

  const handleClick = () => {
    const newState = !node.checked
    
    passDownState(node, newState)
    passUp(node.parent)

  }

  return (
    <div>
      <input
        type="checkbox"
        // id="tree-select-input"
        checked={node.checked}
        onChange={handleClick}
        ref={ref}
      ></input>{node.val}
      <div className="node-children">
        {node.children.map((child, i) => {
          return <NodeWrapper node={child} key={`child-${i}`}/>;
        })}
      </div>
    </div>
  );
};
