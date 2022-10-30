import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../Context/Context';

export default function Register({open,handleClose}) {
    const {UserSetter} = useContext(UserContext)
    // const navigate = useNavigate()
    const [reg,setReg] = useState({})

    const HandleClick = (e)=>{
      // console.log(reg)
      UserSetter(reg)
      alert('registration successfull, Login Please!!')
    }
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
            <DialogTitle style={{textAlign:'center'}}><h1>Register</h1></DialogTitle>
            &nbsp;&nbsp;&nbsp; Glad to Have you here !!! Welcome to Take to Heart &nbsp;&nbsp;&nbsp;&nbsp;
            <DialogContent>
            <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e)=>{
              setReg({...reg,name:e.target.value})
            }}
          /><br />
          <TextField
            autoFocus
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e)=>{
              setReg({...reg,email:e.target.value})
            }}
          /><br />
          <TextField
          autoFocus
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
          onChange={(e)=>{
            setReg({...reg,pass:e.target.value})
          }}
        /><br />
        <TextField
          autoFocus
          margin="dense"
          label="Confirm Password"
          type="password"
          fullWidth
          variant="standard"
          onChange={(e)=>{
            if(reg.pass===e.target.value){
              console.log('fine')
            }
          }}
        /><br />
        <TextField
          autoFocus
          margin="dense"
          label="Phone Number"
          type="number"
          fullWidth
          variant="standard"
          onChange={(e)=>{
            setReg({...reg,ph:e.target.value})
          }}
        /><br />
        <Button onClick={HandleClick}
        fullWidth
        variant="contained"
        >Continue</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
