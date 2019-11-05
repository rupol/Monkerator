import React from "react";
import "./App.css";

import Episode from "./components/Episode";

function App() {
  return (
    <div className="App">
      <h1>monkerator</h1>
      <h2 className="subtitle">analog TV selection for a digital world</h2>
      <Episode />
    </div>
  );
}

export default App;
