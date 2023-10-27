import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Shadows, ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material';

import CreateVacancy from './pages/CreateVacancy/CreateVacancy';
import SignIn from 'pages/SignIn/SignIn';
import Vacancies from 'pages/Vacancies/Vacancies';
import Layout from 'components/Layout/Layout';

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
        <StyledEngineProvider injectFirst>
          <Routes>
            <Route path="/" element={<div>Страница еще не готова</div>} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route element={<Layout />}>
              <Route path="/vacancies" element={<Vacancies />} />
              <Route path='/create-vacancy' element={<CreateVacancy />} />
            </Route>
          </Routes>
        </StyledEngineProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
