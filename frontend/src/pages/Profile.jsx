import Header from "../components/Header";
import MainProfile from "./profile/MainProfile";

function Profile() {
  return (
    <div className="page profile">
      <Header title="Profile" />
      <MainProfile />
    </div>
  );
}

export default Profile;
