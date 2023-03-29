function StatusWin() {
  return (
    <>
      <div className="validatorBackground validatorBackground--good" />
      <audio autoPlay>
        <source src="/sounds/good.mp3" type="audio/mp3" />
        <track kind="captions" />
      </audio>
      <div className="scoreAnimation">
        <img
          className="scoreAnimation__img scoreAnimation__img--win"
          src="images/aninWin.gif"
          alt="Congrats !"
        />
        <p className="scoreAnimation__message scoreAnimation__message--win">
          You scored 30 PTS
        </p>
      </div>
    </>
  );
}

export default StatusWin;
