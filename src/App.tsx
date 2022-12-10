import './App.css';
import { MuiTypography } from './comonents/MuiTypography';
import { MuiButton } from './comonents/MuiButton';
import { MuiTextField } from './comonents/MuiTextField';
import { MuiTable } from './comonents/MuiTable';
import { Divider, Stack, createTheme, colors, ThemeProvider, Box } from '@mui/material'
import { MuiDeleteAll } from './comonents/MuiDeleteAll'
import * as React from 'react'


const theme = createTheme({
  palette: {
    secondary: {
      main: colors.orange[500]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MuiTypography />
        <Stack sx={{ border: '10px solid white' }} divider={<Divider flexItem />} direction="row" alignItems="center">
          <MuiTextField />
          <Stack sx={{ border: '20px solid white' }} divider={<Divider flexItem />} direction="row">
          <MuiButton />
          <Box alignItems="flex-end" display="flex" justifyContent="flex-end">
          <MuiDeleteAll />
            </Box>
            </Stack>
        </Stack>
        <Stack sx={{ border: '10px solid white' }} divider={<Divider flexItem />}>
          <MuiTable />
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default App;
