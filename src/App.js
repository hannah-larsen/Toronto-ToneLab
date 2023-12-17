import React from "react";
import Navbar from "./Navbar";
import { BirdSoundButton, StreetSoundButton } from "./PlaySound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="centered">
          <BirdSoundButton />
        </div>

        <div className="centered">
          <StreetSoundButton />
        </div>
      </main>
    </div>
  );
}

export default App;
