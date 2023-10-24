import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Shadows, ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material';

import SignIn from '@pages/SignIn/SignIn';

const theme = createTheme({
  shadows: Array(25).fill('none') as Shadows,
  palette: {
    primary: {
      main: '#5A9BFF',
      light: '#F1F6FF',
      dark: '#1D6BF3',
      contrastText: '#FFF',
    },
    text: {
      primary: '#1A1B22',
      secondary: '#797981',
      disabled: '#DDE0E4',
    },
    background: {
      paper: '#F9FAFB',
      default: '#FFFFFF',
    },
    error: {
      main: '#FF0200',
    },
  },
  typography: {
    h1: {
      fontSize: 34,
      lineHeight: '40px',
    },
    h2: {
      fontSize: 24,
      lineHeight: '32px',
    },
    h3: {
      fontSize: 20,
      lineHeight: '24px',
    },
    subtitle1: {
      fontSize: 18,
      lineHeight: '24px',
    },
    body1: {
      fontSize: 16,
      lineHeight: '20px',
    },
    body2: {
      fontSize: 14,
      lineHeight: '20px',
    },
    caption: {
      fontSize: 13,
      lineHeight: '16px',
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
