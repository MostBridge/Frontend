import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Shadows, ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

import Layout from 'components/custom/Layout/Layout';
import CreateVacancy from './pages/CreateVacancy/CreateVacancy';
import SignIn from 'pages/SignIn/SignIn';
import Vacancies from './pages/Vacancies/Vacancies';
import Candidates from 'pages/Candidates/Candidates';
import User from './pages/User/User';
import Favorite from 'pages/Favorite/Favorite';
import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute';

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
      fontWeight: '500px',
    },
    h3: {
      fontFamily: "'YS Display'",
      fontSize: 20,
      lineHeight: '24px',
      margin: 0,
    },
    subtitle1: {
      fontWeight: 500,
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
          <Provider store={store}>
            <Routes>
              <Route path="/sign-in" element={<SignIn />} />
              <Route element={<ProtectedRoute component={<Layout />} />}>
                <Route path="/" element={<ProtectedRoute component ={<Vacancies />} />} />
                <Route path="/candidates" element={<ProtectedRoute component ={<Candidates />} />} />
                <Route path="/favorite" element={<ProtectedRoute component ={<Favorite />} />} />
                <Route path="/create-vacancy" element={<ProtectedRoute component ={<CreateVacancy />} />} />
                <Route path="/user"element={<ProtectedRoute component ={<User />} />} />
              </Route>
            </Routes>
          </Provider>
        </StyledEngineProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
