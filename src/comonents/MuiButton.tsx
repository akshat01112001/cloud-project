import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import React,{useState} from 'react'

export const MuiButton = () => {
    const [link, setLink] = useState('')
    console.log({link})
    const handleChange = (e :Event) => {
        setLink((e.target as HTMLInputElement).value as string)
    }
    return (
        <div>
            <Button variant="contained" href="" color="primary" endIcon={<SendIcon/>}>Submit</Button>
        </div>
    )
}