import "./Component2.css";
import Component3 from "./Component3";

export default function Component2() {
  return (
    <div className="component2">
      <span className="component2-badge">Component 2</span>
      <Component3 />
    </div>
  );
}