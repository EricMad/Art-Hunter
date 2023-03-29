import Header from "../components/Header";
import MainGallery from "./gallery/MainGallery";

function Gallery() {
  return (
    <div className="page gallery">
      <Header title="Gallery" icon="true" />
      <MainGallery />
    </div>
  );
}

export default Gallery;
