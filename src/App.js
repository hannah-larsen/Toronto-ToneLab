import React from "react";
import Navbar from "./Navbar";
import { AmbientButton, PercussionButton } from "./PlaySound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="centered">
          <AmbientButton />
        </div>

        <div className="centered">
          <PercussionButton />
        </div>
      </main>
    </div>
  );
}

export default App;
