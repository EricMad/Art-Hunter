import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function TemplateNav() {
  return (
    <div>
      <Outlet />
      <NavBar />
    </div>
  );
}

export default TemplateNav;
