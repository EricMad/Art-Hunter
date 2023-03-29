import React, { useState } from "react";
import TextField from "@mui/material/TextField";

function UsernameInput({ inputRef }) {
  const [info, setInfo] = useState("");
  return (
    <div>
      <TextField
        helperText={!info && "Username is required"}
        className="demo-helper-text-aligned customInput"
        id="Username"
        label="Username"
        inputRef={inputRef}
        value={info}
        required
        onChange={(e) => setInfo(e.target.value)}
      />
    </div>
  );
}

export default UsernameInput;
