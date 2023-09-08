import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9c27b0'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

