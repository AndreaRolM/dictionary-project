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
        <footer>
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/andrea-rold%C3%A1n-mohedano-242461158/"
            className="footer-link"
            target="_blank"
            rel="noreferrer"
          >
            Andrea Roldán
          </a>
          , open-sourced on{" "}
          <a
            href="https://github.com/AndreaRolM/dictionary-project"
            className="footer-link"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://nifty-euclid-1ad30c.netlify.app/"
            className="footer-link"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
