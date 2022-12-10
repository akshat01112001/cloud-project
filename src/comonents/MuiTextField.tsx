import { TextField, FormControl} from "@mui/material"
import React from 'react'

export const MuiTextField = () => {
    return (
        <div>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField label="Link" variant="standard" helperText="Provide a valid article URL" size="medium" required />
            </FormControl>
        </div>
    )
}