import useSound from "use-sound";
import audio1 from "../src/sounds/ambient-audio1.wav";
import audio2 from "../src/sounds/ambient-audio2.wav";
import audio3 from "../src/sounds/ahh-audio1.wav";
import audio4 from "../src/sounds/drum-audio1.wav";
import audio5 from "../src/sounds/percussion-audio1.wav";

export const AmbientButton = () => {
  const [play] = useSound(audio1);
  return <button className="button-blob" onClick={play}></button>;
};

export const PercussionButton = () => {
    const [play] = useSound(audio5);
    return <button className="button-blob" onClick={play}></button>;
};
  
