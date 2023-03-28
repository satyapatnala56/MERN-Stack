import React from "react";
import { BackImg, MidDiv } from "../Styles/styles";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [valid, setValid] = useState(false);
  const [user, setUser] = useState({ username: "", password: "" });

  const submitHandler = () => {
    axios.post("http://localhost:5500/adminlogin", user).then((res) => {
      if (res.data.success) {
        navigate("/admin");
      } else {
        alert("Wrong credentials");
      }
    });
  };

  return (
    <BackImg>
      <MidDiv>
        <h1 style={{ color: "white" }}>Welcome Admin</h1>
        <Form style={{ width: 400 }}>
          <InputGroup hasValidation>
            <InputGroup.Text>Admin</InputGroup.Text>
            <Form.Control
              type="text"
              required
              isInvalid={valid}
              value={user.username}
              onChange={(e) =>
                setUser((prev) => {
                  console.log(e.target.value);
                  return { ...prev, username: e.target.value };
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
          <br />
          <InputGroup hasValidation>
            <InputGroup.Text>Password</InputGroup.Text>
            <Form.Control
              type="password"
              required
              isInvalid={valid}
              value={user.password}
              onChange={(e) =>
                setUser((prev) => {
                  console.log(e.target.value);
                  return { ...prev, password: e.target.value };
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please provide Password.
            </Form.Control.Feedback>
          </InputGroup>
          <br />
          <Button variant="success" onClick={submitHandler}>
            Submit
          </Button>
        </Form>
      </MidDiv>
    </BackImg>
  );
}

export default Login;
