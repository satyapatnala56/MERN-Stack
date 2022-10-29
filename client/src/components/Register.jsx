import React from 'react';
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Link, useNavigate } from 'react-router-dom';

export default function Register({open,handleClose}) {
    const navigate = useNavigate()
    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     console.log('wewgekuhk')
    //     // navigate('user')
    // }
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
        {/* <DialogActions> */}
          {/* <Checkbox defaultChecked/>Remember Me */}
          {/* <Link href></Link> */}
          {/* <Button onClick={handleClose}>Forgot password</Button> */}
        {/* </DialogActions> */}
      </Dialog>
    </div>
  );
}
