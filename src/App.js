import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.css";
import TorontoLineArt from "./assets/toronto-line-art.png";
import TTCAmbience from "./sounds/ttc-ambience-loop.mp3";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="Image-Container">
          <img
            className="Main-Image"
            alt="Toronto skyline line art"
            src={TorontoLineArt}
          ></img>
        </div>

        <div className="Audio-Container">
          <div>
            <p className="Audio-Title">TTC Subway Intercom</p>
          </div>
          <div class="audio-player">
            <audio
              controls
              controlsList="nodownload noplaybackrate"
              loop="true"
            >
              <source
                className="Audio-Player"
                src={TTCAmbience}
                type="audio/mpeg"
              ></source>
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
