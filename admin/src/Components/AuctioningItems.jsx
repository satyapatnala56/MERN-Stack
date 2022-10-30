import React from 'react'

import { LetsFlex } from '../Styles/styles';
import ActionAreaCard from '../Parts/AreaCard';

function AuctioningItems() {
  return (
    <>
    <h3 style={{paddingBottom:20}}>Auctioning Items</h3>
    <LetsFlex>
    <ActionAreaCard />
    <ActionAreaCard />
    <ActionAreaCard />
    </LetsFlex>   
     <LetsFlex>
    <ActionAreaCard />
    <ActionAreaCard />
    <ActionAreaCard />
    </LetsFlex>
    </>
  )
}

export default AuctioningItems



