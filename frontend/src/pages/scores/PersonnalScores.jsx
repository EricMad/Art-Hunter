import { useContext } from "react";
import { authContext } from "../../contexts/AuthContextProvider";

function PersonnalScores({ scores }) {
  const { currentUser } = useContext(authContext);

  /* In the scores array(from props), we find the current user */
  const currentUserScore = scores?.find((user) => user.id === currentUser?.id);

  /* In the scores array( from props), we find the current user index */
  const currentUserRank = scores?.findIndex(
    (user) => user.id === currentUser?.id
  );

  return (
    <div className="personnalScores">
      <p className="personnalScores__column">
        <span className="srOnly">Rank</span>
        <span>{currentUserRank + 1}</span>
      </p>
      <p className="personnalScores__column ">
        <span className="personnalScores__infoBold">
          {currentUserScore?.username}
        </span>
      </p>
      <p className="personnalScores__column">
        <span className="srOnly">Found</span>
        <span> {currentUserScore?.count} </span>
      </p>
      <p className="personnalScores__column">
        <span className="srOnly">Score</span>
        <span> {currentUserScore?.score}</span>
      </p>
    </div>
  );
}

export default PersonnalScores;
