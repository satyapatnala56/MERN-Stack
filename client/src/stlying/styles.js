import styled from 'styled-components'

import {dark,white,lightwhite,lightdark, backimg} from './colors'

// const dark = 'black';
// const white = 'white';
// const lightwhite = 'aliceblue';
// const lightdark = 'grey'

// export default  {
// dark,white,lightwhite,lightdark
// };

export const StyledP = styled.p`
/* margin: 0; */
background-color: ${lightdark};
color: aliceblue;
/* padding: 0; */
`
export const DarkP = styled.p`
color: ${dark};
`
export const WhiteP = styled.p`
color: ${white};
`
export const LightwhiteP = styled.p`
color: ${lightwhite};
`
export const LightdarkP = styled.p`
color: ${lightdark};
`
export const Backdiv = styled.div`
background-image: url(${backimg});
background-size:cover;
height:100%;
width: 100%;
background-repeat:no-repeat;
/* background-position:center center; */
position: absolute;
`

export const ProfileImg = styled.img`
width: 20px;
border-radius:100%;
`
export const SpacedDiv = styled.div`
margin:0 5%;

`
export const Styledh1 = styled.h1`
font-weight: 600;
padding: 20px;
/* border-bottom: 1px solid black; */
`
export const Reddata =  styled.span`
color:red;
`

export const CenterDiv = styled.div`
text-align: center;
padding:0 20px;
`
export const ShadowDiv = styled.div`
background-color: #fff9ff;
`

export const ContainedDiv = styled.div`
margin: 2% 15%;
`
export const DpImage = styled.img`
border: 1px solid black;

width: 150px;
height: 150px;
border-radius: 100%;
margin: 20px;
`
export const FlexDiv = styled.div`
display: flex;
/* align-items: flex-end; */
/* justify-content:space-between; */
`
export const BorderDiv = styled.div`
display: flex;
border: 1px solid #6c757d;
background-color: aliceblue;
/* align-items: flex-end; */
`

export const ProfileDiv = styled.div`
margin: 30px;
padding-left: 20px;
`
export const FullImg = styled.div`
width: 100%;
height: 100%;
`

export const FooterDiv = styled.div`
margin-top: 50px;
/* border: 1px solid black; */
display: flex;
justify-content: space-around;
background-color: #d4f7e8;
padding: 20px;
`
export const FlexRow = styled.tr`
display: flex;
justify-content:space-between;
padding: 10px;

`

export const GridImg = styled.div`
padding-top: 50px;
display: flex;
flex-wrap: wrap;
gap: 10px;
align-items: center;
justify-content: center;
/* max-width: 620px; */
margin: 0 auto;
object-fit: contain;
/* width: 200px;
cursor: pointer; */
`
export const ImgSupp = styled.div`
object-fit: contain;
height: 300px;
width: 250px;
cursor: pointer;
`
export const Killimg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

export const CornorDiv = styled.div`
position: obsolute;
padding-left: 80%;
/* margin-top: 80%; */
`

export const Fulldiv = styled.div`
width: 100%;
height: 100%;
/* position: absolute; */
`

export const Midh1 = styled.h1`
padding-top: 20%;
/* padding-bottom: 30%; */
`

export const GetDown = styled.div`
margin-top: 50%;
`

export const ProfileNameBack = styled.div`
/* background-image: url('https://ae01.alicdn.com/kf/HTB1wc8DRFXXXXXFXpXXq6xXFXXXP/background-halloween-Scary-Halloween-photography-cloth-Customizable-vinyl-background-backgrounds-for-photo-studio-10x10ft.jpg_Q90.jpg_.webp'); */
/* background-size: cover ; */
/* color:#d4f7e8; */
color: black;
text-align: center;
padding: 20px;
/* background-color: black; */
/* object-fit: cover contain; */
`