import React, { useState } from "react";
import TextField from "@mui/material/TextField";

function EmailInput({ inputRef }) {
  const [info, setInfo] = useState("");
  return (
    <div>
      <TextField
        helperText={!info && "Email is required"}
        className="demo-helper-text-aligned customInput"
        id="Email"
        label="Email"
        inputRef={inputRef}
        value={info}
        required
        onChange={(e) => setInfo(e.target.value)}
      />
    </div>
  );
}

export default EmailInput;
