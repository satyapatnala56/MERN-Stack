import { Dialog } from '@mui/material'
import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'

function ImageAdder({open,close,add,setAdd}) {
    const [ima,setImage] = useState()
    const handleClose = () =>{
        close(false)
    }
  return (
    <div>
        <Dialog open={open} onClose={handleClose}>
            <input type='text' onChange={(e)=>setImage(e.target.value)} />
            {ima && <div>
                <img src={ima} alt='Added one'/>
                <Button variant='success' onClick={()=>{
                    setAdd(...add,ima)
                }}>Add this</Button>
                </div>}
        </Dialog>
    </div>
  )
}

export default ImageAdder