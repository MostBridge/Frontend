import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Shadows, ThemeProvider, createTheme } from '@mui/material';

import SignIn from '@pages/SignIn/SignIn';
import CreateVacancy from '@pages/CreateVacancy/CreateVacancy';

const theme = createTheme({
  shadows: Array(25).fill('none') as Shadows,
  palette: {
    primary: {
      main: '#5A9BFF',
      light: '#F1F6FF',
      dark: '#1D6BF3',
      contrastText: '#FFF',
    },
    error: {
      main: '#FF0200',
    },
  },
  typography: {
    h1: {
      fontSize: 34,
      lineHeight: 40,
      color: '#1A1B22',
    },
    h2: {
      fontSize: 24,
      lineHeight: 32,
      color: '#1A1B22',
    },
    h3: {
      fontSize: 20,
      lineHeight: 24,
      color: '#1A1B22',
    },
    subtitle1: {
      fontSize: 18,
      lineHeight: 24,
      color: '#1A1B22',
    },
    body1: {
      fontSize: 16,
      lineHeight: 20,
      color: '#1A1B22',
    },
    body2: {
      fontSize: 14,
      lineHeight: 20,
      color: '#1A1B22',
    },
    caption: {
      fontSize: 14,
      lineHeight: 16,
      color: '#1A1B22',
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
          <Route path='/create-vacancy' element={<CreateVacancy />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
