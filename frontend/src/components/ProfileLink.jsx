import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function ProfileLink({ title }) {
  return (
    <Link to="/profile" className="iconLink profileLink">
      {title === "Update" ? <ArrowBackIosIcon /> : <AccountCircleIcon />}
      <span className="srOnly">Profile</span>
    </Link>
  );
}

export default ProfileLink;
