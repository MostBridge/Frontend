import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';

import SignIn from '@pages/SignIn/SignIn';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5A9BFF',
      dark: '#1D6BF3',
      contrastText: '#FFF',
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
