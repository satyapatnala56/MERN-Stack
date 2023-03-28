import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import { userActions } from "../store/user-store";
import axios from "axios";
import { useDispatch } from "react-redux";

export default function FormDialog({ open, handleClose }) {
  const navigate = useNavigate();
  const [log, setLog] = useState();

  const dispatch = useDispatch();

  const HandleSign = () => {
    console.log(12312);
    axios.post("http://localhost:5500/login", log).then((res) => {
      if (res.data.status === true) {
        dispatch(userActions.setUser({isAuth: true, user: res.data.user}));
        navigate("user");
      }
    });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sign In</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => setLog({ ...log, email: e.target.value })}
          />
          <br />
          <TextField
            autoFocus
            margin="dense"
            id="pass"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={(e) => setLog({ ...log, pass: e.target.value })}
          />
          <br />
          <Button fullWidth variant="contained" onClick={HandleSign}>
            Continue
          </Button>
        </DialogContent>
        <DialogActions>
          <Checkbox defaultChecked />
          Remember Me
          <Button onClick={handleClose}>Forgot password</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
