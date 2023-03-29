import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import UsernameInput from "../../components/UsernameInput";
import SubmitRegister from "./SubmitRegister";

import { authContext } from "../../contexts/AuthContextProvider";

function MainRegister() {
  const { login } = useContext(authContext);
  const mailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/users/register`, {
        username: usernameRef.current.value,
        email: mailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((response) => {
        login(response.data.token);
      })
      .then(() => {
        navigate("/shoot");
      });
  }

  return (
    <main className="main main--form">
      <form className="form" onSubmit={onSubmit}>
        <UsernameInput inputRef={usernameRef} />
        <EmailInput inputRef={mailRef} />
        <PasswordInput inputRef={passwordRef} />
        <SubmitRegister />
      </form>
    </main>
  );
}

export default MainRegister;
