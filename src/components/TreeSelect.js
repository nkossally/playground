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

  const checkAllChildrenForUnchecked = (root) =>{
    let childUnchecked = false

    const helper = (currNode) =>{
      currNode.children.forEach(child =>{
        if(!child.checked){
          childUnchecked = true
        }
        childUnchecked = childUnchecked || checkAllChildrenForUnchecked(child)
      })
    }

    helper(root)

    return  childUnchecked;

  }

  const maybeSetParentsIndeterminate = (root) => {
    if(!root) return;

    const childUnchecked = checkAllChildrenForUnchecked(root)

    if(root.checked){
      if(childUnchecked){
        root.ref.current.indeterminate = true;
      } else {
        root.ref.current.indeterminate = false;
      }
    }

    maybeSetParentsIndeterminate(root.parent)
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
    node.ref.current.indeterminate = false;
    
    passDownState(node, newState)

    maybeSetParentsIndeterminate(node.parent)
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
