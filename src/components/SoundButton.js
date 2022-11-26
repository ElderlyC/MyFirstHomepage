import useSound from "use-sound";
const SoundButton = ({ sound, text, allowPause, id }) => {
  const [play] = useSound(sound);
  if (allowPause) {
    console.log("pausefunction");
  }
  return (
    <button id={id} onClick={play}>
      {text}
    </button>
  );
};

export { SoundButton };
