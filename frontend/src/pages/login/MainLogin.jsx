import React, { useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert } from "@mui/material";

import PasswordInput from "../../components/PasswordInput";
import UsernameInput from "../../components/UsernameInput";
import SubmitLogin from "./SubmitLogin";

import { authContext } from "../../contexts/AuthContextProvider";

function MainLogin() {
  const [errorMessage, setErrorMessage] = useState("");
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const { login } = useContext(authContext);

  function onSubmit(event) {
    event.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/users/login`, data, {
        "Content-Type": "application/json",
      })
      .then((response) => {
        if (response) {
          login(response.data.token);
          navigate("/shoot");
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setErrorMessage("User doesn't exist");
        } else {
          setErrorMessage("An error occured!");
        }
      });
  }

  return (
    <main className="main main--form">
      <form className="form" onSubmit={onSubmit}>
        <UsernameInput inputRef={usernameRef} />
        <PasswordInput inputRef={passwordRef} />
        <SubmitLogin />
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      </form>
    </main>
  );
}

export default MainLogin;
