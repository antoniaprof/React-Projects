import React from "react";
import Header from "./Header/Header";
import LeftPanel from "./LeftPanel/LeftPanel";
import MiddlePanel from "./MiddlePanel/MiddlePanel";
import RightPanel from "./RightPanel/RightPanel";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <LeftPanel />
        <MiddlePanel />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
