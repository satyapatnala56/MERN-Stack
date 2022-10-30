import React from 'react'
import ActionAreaCard from '../Parts/AreaCard'
import Navbar from '../Parts/Navbar'
import { Contain, LetsFlex } from '../Styles/styles'
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Table from './Table'
function Auction() {
  return (
    <div  style={{backgroundColor:'#d1d1d1'}}>
      <Navbar />

      <Contain>
      <LetsFlex>
    <ActionAreaCard />
    <ActionAreaCard />
    <ActionAreaCard />
    </LetsFlex>   
     <LetsFlex>
    <ActionAreaCard />
    {/* <ActionAreaCard /> */}
    <ActionAreaCard />
    </LetsFlex>

    <Card style={{margin:20}}>
      {/* <CardContent> */}
      <Typography variant='h5' style={{padding:20}}>
      Available arts for Auction
      </Typography>
      <Typography variant='caption'>
      <Table />

      </Typography>
      <Button variant='success'>Add selected to Auction</Button>
      {/* </CardContent> */}
    </Card>
      </Contain>
        </div>
  )
}

export default Auction