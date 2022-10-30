import { Dialog } from '@mui/material'
import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import UserContext from '../Context/Context'

function ImageAdder({open,close}) {
    const {AddArt} = useContext(UserContext)
    const [Pho,setPho] = useState('')
    const handleClose = () =>{
        close(false)
    }
  return (
    <div>
        <Dialog open={open} onClose={handleClose}>
            <input type='url' onChange={(e)=>{
                setPho(e.target.value)
            }} />

                <Button variant='success' onClick={()=>{
                    AddArt({
                        id : 10,
                        name:'karthik',
                        img:Pho
                    })
                    console.log(Pho)
                    close(false)
                }}>Add this</Button>
        </Dialog>
    </div>
  )
}

export default ImageAdder