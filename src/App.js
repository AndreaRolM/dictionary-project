import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <p>Hello, this is my dictionary.</p>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>Coded by Andrea R.</footer>
      </div>
    </div>
  );
}

export default App;
