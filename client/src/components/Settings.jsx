import { Card } from '@mui/material'
import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Footer from '../parts/Footer'
import UserNav from '../parts/userNav'
import { ContainedDiv, FlexRow } from '../stlying/styles'

function Settings() {
    const HandleSave = ()=>{
        prompt('Enter Password');
        alert('successfully Updated')
    }
    const HandlePass = ()=>{
        alert("Successfully Password Changed")
    }
  return (
    <div style={{backgroundColor:'#e1e0e0'}}>
        <UserNav />
        <ContainedDiv>
           <Card style={{padding:30}}>
            <h2>Details</h2>
            <table style={{width:700}}>
                <FlexRow>
                    <th>Full Name</th>
                    <th><input type='text' placeholder='Karthik M'/></th>
                </FlexRow>
                <FlexRow>
                    <th>Email</th>
                    <th><input type='text' placeholder='Email'/></th>
                </FlexRow>
                <FlexRow>
                    <th>Description</th>
                    <th><input type='text' placeholder='Description'/></th>
                </FlexRow>                <FlexRow>
                    <th>Phone Number</th>
                    <th><input type='text' placeholder='Phone Number'/></th>
                </FlexRow>
            </table>
            <Button variant='success' onClick={HandleSave}>Save Changes</Button>
           </Card>
           <Card style={{padding:30,marginTop:20}}>
            <h2>Reset Password</h2>
            <table style={{width:700}}>
                <FlexRow>
                    <th>Password</th>
                    <th><input type='password' placeholder='Password'/></th>
                </FlexRow>
                <FlexRow>
                    <th>New Password</th>
                    <th><input type='password' placeholder='New Password'/></th>
                </FlexRow>
                <FlexRow>
                    <th>Retype New Password</th>
                    <th><input type='password' placeholder='Retype New Password'/></th>
                </FlexRow>
            </table>
            <Button variant='success' onClick={HandlePass}>Save Changes</Button>
           </Card>
        </ContainedDiv>
        <Footer />
    </div>
  )
}

export default Settings