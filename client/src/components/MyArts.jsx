import React, { useContext, useState } from 'react'
import Footer from '../parts/Footer'
import UserNav from '../parts/userNav'
import { CenterDiv, CornorDiv, GridImg, ImgSupp, Killimg, Reddata } from '../stlying/styles'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ImageAdder from '../parts/ImageAdder';
import UserContext from '../Context/Context';
function MyArts() {
    const {myarts} = useContext(UserContext)
    const [dia,setDia] = useState(false)
    const HandleAdd=()=>{
        setDia(true)
    }
  return (<>
  <UserNav />
    <CenterDiv>
  <h1>My <Reddata>Pictures</Reddata></h1>
    </CenterDiv>
  <GridImg>
            {myarts.map((e)=>{
                return <ImgSupp><Killimg src={e.img} /></ImgSupp>
            })}
            </GridImg>
            <CornorDiv>
    <AddPhotoAlternateIcon onClick={HandleAdd} style={{height:50,width:50}} />
    {dia&& <ImageAdder open={dia} close={setDia} />}
  </CornorDiv>
  <Footer />
  </>)
}

export default MyArts