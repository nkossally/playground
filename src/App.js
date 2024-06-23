import { FlexSection } from "./sections/FlexSection";
import { FlexGrowAndShrinkSection } from "./sections/FlexGrowAndShrinkSection";
import "./style.scss";

function App() {
  return (
    <div className="App">
      <FlexSection />

      <FlexGrowAndShrinkSection />
    </div>
  );
}

export default App;
