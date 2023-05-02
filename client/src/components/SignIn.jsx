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
import { useDispatch, useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";

export default function FormDialog({ open, handleClose }) {
  const navigate = useNavigate();
  const [log, setLog] = useState();
  const [loaded, setLoaded] = useState(false);

  const dispatch = useDispatch();
  const backend = useSelector((state) => state.user.backend);

  const HandleSign = () => {
    console.log(12312);
    setLoaded(true);
    axios.post(`${backend}/login`, log).then((res) => {
      if (res.data.status === true) {
        dispatch(userActions.setUser({ isAuth: true, user: res.data.user }));
        setLoaded(false);
        navigate("user");
      }
    });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Sign In
          {loaded && (
            <div style={{ margin: "0 5px" }}>
              <TailSpin height="40" width="40" color="#00BFFF" radius="1" />
            </div>
          )}
        </DialogTitle>
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
