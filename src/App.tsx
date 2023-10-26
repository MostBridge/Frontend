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
    fontFamily: "'YS Text'",
    h1: {
      fontFamily: "'YS Display'",
      fontSize: 34,
      lineHeight: '40px',
      margin: 0,
    },
    h2: {
      fontFamily: "'YS Display'",
      fontSize: 24,
      lineHeight: '32px',
      margin: 0,
    },
    h3: {
      fontFamily: "'YS Display'",
      fontSize: 20,
      lineHeight: '24px',
      margin: 0,
    },
    subtitle1: {
      fontSize: 18,
      lineHeight: '24px',
      margin: 0,
    },
    body1: {
      fontSize: 16,
      lineHeight: '20px',
      margin: 0,
    },
    body2: {
      fontSize: 14,
      lineHeight: '20px',
      margin: 0,
    },
    caption: {
      fontSize: 13,
      lineHeight: '16px',
      margin: 0,
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
