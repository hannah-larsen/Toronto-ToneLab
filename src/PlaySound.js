import useSound from "use-sound";
import audio1 from "../src/sounds/bird-ambience.wav";
import audio2 from "../src/sounds/street-ambience.wav";

export const BirdSoundButton = () => {
  const [play] = useSound(audio1);
  return <button className="sound-button button1" onClick={play}>Birds</button>;
};

export const StreetSoundButton = () => {
    const [play] = useSound(audio2);
    return <button className="sound-button button2" onClick={play}>Street</button>;
};
  
