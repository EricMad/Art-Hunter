import CollectionsIcon from "@mui/icons-material/Collections";
import LocalSeeIcon from "@mui/icons-material/LocalSee";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bottomNav">
      <NavLink to="/gallery" className="iconLink">
        <CollectionsIcon />
        <span>Gallery</span>
      </NavLink>
      <NavLink to="/shoot" className="iconLink">
        <LocalSeeIcon />
        <span>Shoot</span>
      </NavLink>
      <NavLink to="/scores" className="iconLink">
        <EmojiEventsIcon />
        <span>Scores</span>
      </NavLink>
    </nav>
  );
}

export default NavBar;
