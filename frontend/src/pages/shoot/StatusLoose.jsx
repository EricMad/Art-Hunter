function StatusLoose() {
  return (
    <>
      <div className="validatorBackground validatorBackground--bad" />
      <audio autoPlay>
        <source src="/sounds/bad.mp3" type="audio/mp3" />
        <track kind="captions" />
      </audio>
      <div className="scoreAnimation">
        <img
          className="scoreAnimation__img scoreAnimation__img--loose"
          src="images/animLoose.gif"
          alt="Oh Shit !"
        />
        <p className="scoreAnimation__message scoreAnimation__message--loose">
          Not recognized as a graff !
        </p>
      </div>
    </>
  );
}

export default StatusLoose;
