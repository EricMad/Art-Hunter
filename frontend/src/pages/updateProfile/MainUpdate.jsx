import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import UsernameInput from "../../components/UsernameInput";
import DeleteUpdate from "./DeleteUpdate";
import SubmitUpdate from "./SubmitUpdate";

function MainUpdate() {
  return (
    <main className="main main--form">
      <form className="form">
        <UsernameInput />
        <EmailInput />
        <PasswordInput />
        <SubmitUpdate />
        <DeleteUpdate />
      </form>
    </main>
  );
}

export default MainUpdate;
