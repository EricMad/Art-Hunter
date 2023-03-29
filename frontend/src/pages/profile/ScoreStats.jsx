import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

function ScoreStats({ totalScore }) {
  return (
    <div>
      <EmojiEventsIcon />
      <p className="contentStats">
        <span className="numberStats">{totalScore}</span>
        <span className="unityStats">Points</span>
      </p>
    </div>
  );
}

export default ScoreStats;
