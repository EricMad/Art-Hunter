import Header from "../components/Header";
import MainHome from "./home/MainHome";

function Home() {
  return (
    <div className="page home">
      <Header title="Art Hunters" />
      <MainHome />
    </div>
  );
}

export default Home;
