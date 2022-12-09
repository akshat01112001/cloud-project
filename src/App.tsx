import './App.css';
import { MuiTypography } from './comonents/MuiTypography';
import { MuiButton } from './comonents/MuiButton';
import { MuiTextField } from './comonents/MuiTextField';
import { MuiTable } from './comonents/MuiTable';
import {Divider, Stack,createTheme, colors, ThemeProvider} from '@mui/material'

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
        <MuiTextField/>
        <MuiButton />
        <Stack sx={{ border: '50px solid white' }} divider={<Divider flexItem />}>
          <MuiTable />
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default App;
