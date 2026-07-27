import "./Component1.css";
import Component2 from "./Component2";

export default function Component1() {
  return (
    <div className="component1">
      <span className="component1-badge">Component 1</span>
      <Component2 />
    </div>
  );
}