import { TextField } from "@mui/material"
import React from 'react'

export const MuiTextField = () => {
    return (
        <div>
            <TextField label="Link" variant="standard" helperText="Provide a valid article URL" required/>
        </div>
    )
}