import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Access() {
  return (
    <div className="access">
      <Button
        component={Link}
        to="/register"
        className="access__btn"
        variant="contained"
      >
        Register
      </Button>
      <Button
        component={Link}
        to="/login"
        className="access__btn"
        variant="contained"
      >
        Login
      </Button>
    </div>
  );
}

export default Access;
