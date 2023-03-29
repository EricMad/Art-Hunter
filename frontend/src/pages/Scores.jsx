import Header from "../components/Header";
import MainScores from "./scores/MainScores";

function Scores() {
  return (
    <div className="page scores">
      <Header title="Scores" icon="true" />
      <MainScores />
    </div>
  );
}

export default Scores;
