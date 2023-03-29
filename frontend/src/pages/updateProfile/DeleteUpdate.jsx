import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function DeleteUpdate() {
  return (
    <div>
      <Button className="acces-btn" variant="contained" type="submit">
        <Link to="/home">Delete</Link>
      </Button>
    </div>
  );
}

export default DeleteUpdate;
