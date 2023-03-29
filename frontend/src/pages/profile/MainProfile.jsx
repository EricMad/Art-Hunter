import axios from "axios";
import { useState, useEffect, useContext } from "react";

import BadgesProfile from "./BadgesProfile";
import ManageProfile from "./ManageProfile";
import StatsProfile from "./StatsProfile";
import { authContext } from "../../contexts/AuthContextProvider";

function MainProfile() {
  const { userToken, currentUser } = useContext(authContext);
  const [globalStats, setGlobalStats] = useState([]);

  const config = {
    headers: {
      accessToken: userToken(),
    },
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/scores/global`, config)
      .then((response) => {
        setGlobalStats(response.data);
      });
  }, []);

  /* In the scores array(from props), we find the current user */
  const currentUserStats = globalStats?.find(
    (user) => user.id === currentUser?.id
  );

  return (
    <main className="main main--nav">
      <h2 className="userName">Hello {currentUserStats?.username} !</h2>
      <ManageProfile />
      <StatsProfile currentUserStats={currentUserStats} />
      <BadgesProfile />
    </main>
  );
}

export default MainProfile;
