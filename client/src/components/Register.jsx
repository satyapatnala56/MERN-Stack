import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import UserContext from "../Context/Context";
import axios from "axios";

export default function Register({ open, handleClose }) {
  axios.defaults.withCredentials = false;
  const { UserSetter } = useContext(UserContext);
  // const navigate = useNavigate()
  const [reg, setReg] = useState({});

  const HandleClick = (e) => {
    console.log(reg);
    if (
      reg.name === undefined ||
      reg.email === undefined ||
      reg.pass === undefined ||
      reg.ph === undefined
    ) {
      alert("Please fill all the fields");
      return;
    }
    if (reg.pass !== reg.cpass) {
      alert("Password and Confirm Password do not match");
      return;
    }
    UserSetter(reg);
    axios.post("http://localhost:5500/register", reg).then((res) => {
      console.log(res);
      handleClose();
    });
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ textAlign: "center" }}>
          <h1>Register</h1>
        </DialogTitle>
        &nbsp;&nbsp;&nbsp; Glad to Have you here !!! Welcome to Take to Heart
        &nbsp;&nbsp;&nbsp;&nbsp;
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setReg({ ...reg, name: e.target.value });
            }}
          />
          <br />
          <TextField
            autoFocus
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setReg({ ...reg, email: e.target.value });
            }}
          />
          <br />
          <TextField
            autoFocus
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setReg({ ...reg, pass: e.target.value });
            }}
          />
          <br />
          <TextField
            autoFocus
            margin="dense"
            label="Confirm Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setReg({ ...reg, cpass: e.target.value });
            }}
          />
          <br />
          <TextField
            autoFocus
            margin="dense"
            label="Phone Number"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setReg({ ...reg, ph: e.target.value });
            }}
          />
          <br />
          <Button onClick={HandleClick} fullWidth variant="contained">
            Continue
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
