import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="peace" />
        </main>
        <footer>Coded by Andrea R.</footer>
      </div>
    </div>
  );
}

export default App;
