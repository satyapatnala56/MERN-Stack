import React from "react";
import { FlexDiv, FooterDiv } from "../stlying/styles";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <FooterDiv>
      <div style={{ width: 450 }}>
        <Typography variant="h5">Developers</Typography>
        <FlexDiv style={{ justifyContent: "space-between" }}>
          <div>
            <Typography variant="caption" component="p">
              Vishnu Priya
            </Typography>
            <Typography variant="caption" component="p">
              Sreekar
            </Typography>
            <Typography variant="caption" component="p">
              Satya Kiran
            </Typography>
          </div>
          <div>
            <Typography variant="caption" component="p">
              Harshini sai
            </Typography>
            <Typography variant="caption" component="p">
              Afreen Shaik
            </Typography>
            <Typography variant="caption" component="p">
              Shaik Vazeer Ahamed
            </Typography>
          </div>
          <div>
            <Typography variant="caption" component="p">
              Viswa Teja
            </Typography>
            <Typography variant="caption" component="p">
              Madhava
            </Typography>
          </div>
        </FlexDiv>
      </div>
      <div>
        <Typography variant="h5">Support</Typography>
        <Typography variant="caption" component="p">
          Help & Support
        </Typography>
        <Typography variant="caption" component="p">
          Privacy Policy
        </Typography>
        <Typography variant="caption" component="p">
          Terms of Service
        </Typography>
      </div>
    </FooterDiv>
  );
}

export default Footer;
