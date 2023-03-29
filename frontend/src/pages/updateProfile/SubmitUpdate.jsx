import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function SubmitUpdate() {
  return (
    <div>
      <Button className="acces-btn" variant="contained" type="submit">
        <Link to="/home">update</Link>
      </Button>
    </div>
  );
}

export default SubmitUpdate;
