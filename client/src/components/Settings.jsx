import { Card } from "@mui/material";
import React, { useRef } from "react";
import Button from "react-bootstrap/esm/Button";
import Footer from "../parts/Footer";
import UserNav from "../parts/userNav";
import { ContainedDiv, FlexRow } from "../stlying/styles";
import { useSelector } from "react-redux";
import axios from "axios";
import { userActions } from "../store/user-store";
import { useDispatch } from "react-redux";

function Settings() {
  const user = useSelector((state) => state.user.user);
  const backend = useSelector((state) => state.user.backend);
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);

  const HandleSave = () => {
    const obj = {
      username: nameRef.current.value,
      email: emailRef.current.value,
      mobile: mobileRef.current.value,
      password: user.password,
      id: user._id,
    };
    axios.post(`${backend}/updateuser`, obj).then((res) => {
      console.log(res);
    });
    dispatch(userActions.setUser({ isAuth: true, user: obj }));
  };
  const HandlePass = () => {
    alert("Successfully Password Changed");
  };
  return (
    <div style={{ backgroundColor: "#e1e0e0" }}>
      <UserNav />
      <ContainedDiv>
        <Card style={{ padding: 30 }}>
          <h2>Details</h2>
          <table style={{ width: 700 }}>
            <FlexRow>
              <th>Full Name</th>
              <th>
                <input
                  type="text"
                  placeholder={user.username}
                  style={{ padding: "3px" }}
                  ref={nameRef}
                />
              </th>
            </FlexRow>
            <FlexRow>
              <th>Email</th>
              <th>
                <input
                  type="text"
                  placeholder={user.email}
                  style={{ padding: "3px" }}
                  ref={emailRef}
                />
              </th>
            </FlexRow>
            <FlexRow>
              <th>Phone Number</th>
              <th>
                <input
                  type="text"
                  placeholder={user.mobile}
                  style={{ padding: "3px" }}
                  ref={mobileRef}
                />
              </th>
            </FlexRow>
          </table>
          <Button variant="success" onClick={HandleSave}>
            Save Changes
          </Button>
        </Card>
        <Card style={{ padding: 30, marginTop: 20 }}>
          <h2>Reset Password</h2>
          <table style={{ width: 700 }}>
            <FlexRow>
              <th>Password</th>
              <th>
                <input
                  type="password"
                  placeholder="Password"
                  style={{ padding: "3px" }}
                />
              </th>
            </FlexRow>
            <FlexRow>
              <th>New Password</th>
              <th>
                <input
                  type="password"
                  placeholder="New Password"
                  style={{ padding: "3px" }}
                />
              </th>
            </FlexRow>
            <FlexRow>
              <th>Retype New Password</th>
              <th>
                <input
                  type="password"
                  placeholder="Retype New Password"
                  style={{ padding: "3px" }}
                />
              </th>
            </FlexRow>
          </table>
          <Button variant="success" onClick={HandlePass}>
            Save Changes
          </Button>
        </Card>
      </ContainedDiv>
      <Footer />
    </div>
  );
}

export default Settings;
