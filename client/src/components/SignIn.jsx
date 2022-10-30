import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../Context/Context';

export default function FormDialog({open,handleClose}) {
  const navigate = useNavigate()
  const [log,setLog] = useState()
  const {User} = useContext(UserContext)

  const HandleSign = ()=>{
    if(log.email === User.email && log.pass === User.pass){
      navigate('user')
    }
  }

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
            onChange={(e)=>setLog({...log,email:e.target.value})}
          /><br />
          <TextField
          autoFocus
          margin="dense"
          id="pass"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
          onChange={(e)=>setLog({...log,pass:e.target.value})}
        /><br />
        <Button
        fullWidth
        variant="contained"
        onClick={HandleSign}
        >Continue</Button>
        </DialogContent>
        <DialogActions>
          <Checkbox defaultChecked/>Remember Me
          <Button onClick={handleClose}>Forgot password</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
