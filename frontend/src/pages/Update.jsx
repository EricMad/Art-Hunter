import Header from "../components/Header";
import MainUpdate from "./updateProfile/MainUpdate";

function Update() {
  return (
    <div className="page update">
      <Header title="Update" icon="true" />
      <MainUpdate />
    </div>
  );
}

export default Update;
