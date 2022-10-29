import { Dialog } from '@mui/material'
import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'

function ImageAdder({open,close,add,setAdd}) {
    const [image,setImage] = useState()
    const handleClose = () =>{
        close(false)
    }
  return (
    <div>
        <Dialog open={open} onClose={handleClose}>
            <input type='text' onChange={(e)=>setImage(e.target.value)} />
            {/* <Button variant='success' onClick={()=>}> </Button> */}
            {image && <div>
                <img src={image} />
                <Button variant='success' onClick={()=>{
                    setAdd(...add,image)
                }}>Add this</Button>
                </div>}
        </Dialog>
    </div>
  )
}

export default ImageAdder