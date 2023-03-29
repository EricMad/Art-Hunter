import Header from "../components/Header";
import MainLogin from "./login/MainLogin";

function Login() {
  return (
    <div className="page login">
      <Header title="Login" />
      <MainLogin />
    </div>
  );
}

export default Login;
