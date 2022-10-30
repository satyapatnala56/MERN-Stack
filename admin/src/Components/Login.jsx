import React from 'react'
import { BackImg, MidDiv } from '../Styles/styles'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Button} from 'react-bootstrap'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [valid,setValid] = useState(false)
  return (
    <BackImg>
        <MidDiv>
            <h1 style={{color:'white'}}>Hello Admin Bro <br />Welcome back mawa !!!</h1>
            <Form style={{width:400}}>
            <InputGroup hasValidation>
      <InputGroup.Text>Admin</InputGroup.Text>
      <Form.Control type="text" required isInvalid={valid} />
      <Form.Control.Feedback type="invalid">
        Please choose a username.
      </Form.Control.Feedback>
    </InputGroup><br />
    <InputGroup hasValidation>
      <InputGroup.Text>Password</InputGroup.Text>
      <Form.Control type="password" required isInvalid={valid} />
      <Form.Control.Feedback type="invalid">
        Please provide Password.
      </Form.Control.Feedback>
    </InputGroup><br />
    <Button variant='success' onClick={()=>navigate('admin')}>Submit</Button>
            </Form>
        </MidDiv>
    </BackImg>
  )
}

export default Login