import './App.css';
import { MuiTypography } from './comonents/MuiTypography';
import { MuiButton } from './comonents/MuiButton';
import { MuiTextField } from './comonents/MuiTextField';
import { MuiTable } from './comonents/MuiTable';

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiTextField/>
      <MuiButton />
      <MuiTable/>
    </div>
  );
}

export default App;
