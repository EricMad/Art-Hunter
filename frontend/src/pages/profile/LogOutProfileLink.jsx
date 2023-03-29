import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { authContext } from "../../contexts/AuthContextProvider";

function LogOutProfileLink() {
  const { logout } = useContext(authContext);
  const navigate = useNavigate();

  const loggingOut = () => {
    logout();
    navigate("/");
  };

  return (
    <Button onClick={loggingOut} variant="contained">
      Logout
    </Button>
  );
}

export default LogOutProfileLink;
