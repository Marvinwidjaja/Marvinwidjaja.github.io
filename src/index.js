import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ComponentContextProvider } from "./store/component-context";

ReactDOM.render(
  <ComponentContextProvider>
    <App />
  </ComponentContextProvider>,
  document.getElementById("root")
);
