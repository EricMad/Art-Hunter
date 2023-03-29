import BadgesStats from "./BadgesStats";
import ScoreStats from "./ScoreStats";
import ShootStats from "./ShootStats";

function StatsProfile({ currentUserStats }) {
  return (
    <>
      <h2>Your all-time stats</h2>
      <div className="userStatsFlex">
        <BadgesStats />
        <ScoreStats totalScore={currentUserStats?.score} />
        <ShootStats photosTaken={currentUserStats?.count} />
      </div>
    </>
  );
}

export default StatsProfile;
