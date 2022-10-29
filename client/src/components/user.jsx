// import { Card } from '@mui/material'
// import DummyCard from '../parts/Card'
import React from 'react'
import UserNav from '../parts/userNav'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Sliding from './Sliding';
import { ProfileNameBack, Reddata, ShadowDiv, Styledh1 } from '../stlying/styles';
import { CenterDiv } from '../stlying/styles';
import Footer from '../parts/Footer';
import { Card } from '@mui/material';

function User() {

  return (
    <>
      <UserNav />

          {/* <FlexDiv> */}
          {/* <ShadowDiv > */}
            <Card style={{marginTop:20,padding:20,marginLeft:50,marginRight:50,backgroundColor:'#d3dce6'}}>
            {/* <h1>Hi karthik</h1> */}
            <Greet />
            </Card>
          {/* </ShadowDiv> */}
          {/* </FlexDiv> */}
          <CenterDiv >
      <ShadowDiv>
        <Styledh1>Most Sold Out <Reddata>Arts</Reddata></Styledh1>
      <Sliding />
      </ShadowDiv><br />
      <ShadowDiv>
        <Styledh1>Your Favourite <Reddata>Arts</Reddata></Styledh1>
      <Sliding />
      </ShadowDiv><br />
      <ShadowDiv>
        <Styledh1><Reddata>Arts </Reddata>you may be Intersted</Styledh1>
      <Sliding />
      </ShadowDiv>
           
     {/* <Trail /> */}
    </CenterDiv>
    <Footer />
    </>

  )
}

const Greet = () =>{
return (
  <ProfileNameBack>
  <h3>Hi karthik</h3>
  <p>Let your creativity rule this world</p>
  </ProfileNameBack>
)
}

export default User