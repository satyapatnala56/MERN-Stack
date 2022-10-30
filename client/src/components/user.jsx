import React, { useContext } from 'react'
import UserNav from '../parts/userNav'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Sliding from './Sliding';
import { ProfileNameBack, Reddata, ShadowDiv, Styledh1 } from '../stlying/styles';
import { CenterDiv } from '../stlying/styles';
import Footer from '../parts/Footer';
import { Card } from '@mui/material';
import UserContext from '../Context/Context';
import { MostSold } from '../Context/data';

function User() {
  const {fav} = useContext(UserContext)
  return (
    <>
      <UserNav />
            <Card style={{marginTop:20,padding:20,marginLeft:50,marginRight:50,backgroundColor:'#d3dce6'}}>
            <Greet />
            </Card>
          <CenterDiv >
      <ShadowDiv>
        <Styledh1>Most Sold Out <Reddata>Arts</Reddata></Styledh1>
      <Sliding Data={MostSold} Fav={false} />
      </ShadowDiv><br />
      <ShadowDiv>
        <Styledh1>Your Favourite <Reddata>Arts</Reddata></Styledh1>
      <Sliding Data={fav} Fav={true} />
      </ShadowDiv><br />
      <ShadowDiv>
        <Styledh1><Reddata>Arts </Reddata>you may be Intersted</Styledh1>
      <Sliding Data={MostSold} Fav={false} />
      </ShadowDiv>
      </CenterDiv>
    <Footer />
    </>)
}

const Greet = () =>{
  const {User} = useContext(UserContext)
return (
  <ProfileNameBack>
  <h3>Hi {User.name}</h3>
  <p>Let your creativity rule this world</p>
  </ProfileNameBack>
)
}

export default User