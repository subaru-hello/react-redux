import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import StudyReactLinksTemplate from "./components/study_react_links/StudyReactLinksTemplate";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <StudyReactLinksTemplate />
      </header>
    </div>
  );
}

export default App;
