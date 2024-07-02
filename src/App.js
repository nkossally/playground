import { FlexSection } from "./sections/FlexSection";
import { FlexGrowAndShrinkSection } from "./sections/FlexGrowAndShrinkSection";
import { NodeWrapper, Node } from "./components/TreeSelect";
import "./style.scss";

const node1 = new Node
const node2 = new Node
const node3 = new Node
const node4 = new Node
const node5= new Node
const node6 = new Node
const node7 = new Node

node1.children = [node2, node3]
node2.parent = node1
node3.parent = node1
node2.children = [node4]
node4.parent = node2
node4.children = [node5, node6, node7]
node5.parent = node4
node6.parent = node4
node7.parent = node4

function App() {
  return (
    <div className="App">
      <NodeWrapper node={node1} initialCheckedState={true}></NodeWrapper>
      <FlexSection />

      <FlexGrowAndShrinkSection />
    </div>
  );
}

export default App;
