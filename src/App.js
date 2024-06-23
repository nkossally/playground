import { FlexChild } from "./components/FlexChild";
import { FlexSection } from "./sections/FlexSection";
import "./style.scss";

function App() {
  return (
    <div className="App">
      <FlexSection />

      <div className="flex-parent">
        <FlexChild />
        <FlexChild />
        <FlexChild />
      </div>
    </div>
  );
}

export default App;
