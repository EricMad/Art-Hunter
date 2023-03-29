import Header from "../components/Header";
import MainShoot from "./shoot/MainShoot";

function Shoot() {
  return (
    <div className="page shoot">
      <Header title="Shoot" icon="true" />
      <MainShoot />
    </div>
  );
}

export default Shoot;
