import PictureCard from "./PictureCard";

function GlobalGallery({ pictures }) {
  return (
    <div className="cardList">
      {pictures?.map((picture) => (
        <PictureCard
          key={picture.id}
          username={picture.username}
          date={picture.createdAt.slice(0, 10)}
          img={picture.imgName}
          score={picture.score}
        />
      ))}
    </div>
  );
}

export default GlobalGallery;
