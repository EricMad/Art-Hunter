import StatusWin from "./StatusWin";
import StatusLoose from "./StatusLoose";

function ScoreShoot({ photoValidationStatus }) {
  if (photoValidationStatus === undefined) return null;
  if (photoValidationStatus) return <StatusWin />;
  return <StatusLoose />;
}

export default ScoreShoot;
