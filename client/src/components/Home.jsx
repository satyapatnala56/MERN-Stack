import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import Footer from '../parts/Footer'
import Naving from '../parts/head'
import { Backdiv, Fulldiv, GetDown, Midh1, Reddata, ShadowDiv, Styledh1, WhiteP } from '../stlying/styles'
import Sliding from './Sliding'
// import { Backdiv } from '../stlying/styles'
// import {WhiteP} from '../stlying/styles'
function Home() {
  return (<div>
    {/* // <Backdiv> */}

    <Naving/>
    <Backdiv>
    <Fulldiv style={{paddingLeft:50}}>
      {/* <WhiteP>Take Art To Heart</WhiteP> */}
 <Midh1 style={{color:'white'}}>Take Art To <span style={{color:'#ff012d'}}>Heart</span> </Midh1>
 <p style={{color:'white'}}>The arts are a very wide range of human practices of creative expression, <br />storytelling and cultural participation.</p>
    {/* <Link to='register'> <Button variant='success'>Register For better experience</Button></Link> */}
    </Fulldiv>
    </Backdiv>
    <GetDown>
    {/* <div></div> */}
    <ShadowDiv>
        <Styledh1>Most Sold Out <Reddata>Arts</Reddata></Styledh1>
      <Sliding />
      </ShadowDiv><br />
      <Footer />
      </GetDown>
      </div>
  )
}

export default Home