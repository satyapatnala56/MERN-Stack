import React, { useContext } from 'react'
import UserContext from '../Context/Context'
import Footer from '../parts/Footer'
import UserNav from '../parts/userNav'
import { CenterDiv, GridImg, ImgSupp, Killimg, Reddata } from '../stlying/styles'

function Favourites() {
  const {fav} = useContext(UserContext);
  return (<>
  <UserNav />
    <CenterDiv>
  <h1>Your <Reddata>Favourites</Reddata></h1>
    </CenterDiv>
  <GridImg>
            {fav.map((e,data)=>{
                return <ImgSupp key={data}><Killimg src={e.img} /></ImgSupp>
            })}
            </GridImg>
  <Footer />
  </>)
}

export default Favourites