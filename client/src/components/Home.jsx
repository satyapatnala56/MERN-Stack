import React from 'react'
import Footer from '../parts/Footer'
import Naving from '../parts/head'
import { Backdiv, Fulldiv, GetDown, Midh1, Reddata, ShadowDiv, Styledh1} from '../stlying/styles'
import Sliding from './Sliding'
function Home() {
  return (<div>
    <Naving/>
    <Backdiv>
    <Fulldiv style={{paddingLeft:50}}>
 <Midh1 style={{color:'white'}}>Take Art To <span style={{color:'#ff012d'}}>Heart</span> </Midh1>
 <p style={{color:'white'}}>The arts are a very wide range of human practices of creative expression, <br />storytelling and cultural participation.</p>
    </Fulldiv>
    </Backdiv>
    <GetDown>
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