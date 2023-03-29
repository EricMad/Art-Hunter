import CameraAltIcon from "@mui/icons-material/CameraAlt";

function ShootStats({ photosTaken }) {
  return (
    <div>
      <CameraAltIcon />
      <p className="contentStats">
        <span className="numberStats">{photosTaken}</span>
        <span className="unityStats">Shots</span>
      </p>
    </div>
  );
}

export default ShootStats;
