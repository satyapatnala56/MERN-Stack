import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

export default function Register({open,handleClose}) {
    const navigate = useNavigate()
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
            <DialogTitle style={{textAlign:'center'}}><h1>Register</h1></DialogTitle>
            &nbsp;&nbsp;&nbsp; Glad to Have you here !!! Welcome to Take to Heart &nbsp;&nbsp;&nbsp;&nbsp;
            <DialogContent>
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
          /><br />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          /><br />
          <TextField
          autoFocus
          margin="dense"
          id="pass"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
        /><br />
        <TextField
          autoFocus
          margin="dense"
          id="pass"
          label="Confirm Password"
          type="password"
          fullWidth
          variant="standard"
        /><br />
        <TextField
          autoFocus
          margin="dense"
          id="pass"
          label="Phone Number"
          type="number"
          fullWidth
          variant="standard"
        /><br />
        <Button onClick={(e)=>navigate('/user')}
        fullWidth
        variant="contained"
        >Continue</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
