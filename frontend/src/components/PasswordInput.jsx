import React, { useState } from "react";
import TextField from "@mui/material/TextField";

function PasswordInput({ inputRef }) {
  const [info, setInfo] = useState("");

  return (
    <div>
      <TextField
        helperText={!info && "Password is required"}
        className="demo-helper-text-aligned customInput"
        id="Password"
        label="Password"
        type="password"
        required
        inputRef={inputRef}
        value={info}
        onChange={(e) => setInfo(e.target.value)}
      />
    </div>
  );
}

export default PasswordInput;
