function PictureCard({ username, img, date, score }) {
  return (
    <div className="card">
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}/${img}.jpg`}
        alt={`${img}`}
        className="card__image"
      />
      {username && (
        <p className="card__title">
          <span className="card__txtBold">Taken by :</span> {username}
        </p>
      )}
      {score && (
        <p className="card__score">
          <span className="card__txtBold">Scored :</span> {score} points
        </p>
      )}
      <p>
        <span className="card__txtBold">Taken at :</span> {date}
      </p>
    </div>
  );
}

export default PictureCard;
