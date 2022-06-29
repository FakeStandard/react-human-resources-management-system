import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

// set up custom theme(optional)

// define theme
const theme = createTheme({
  palette: {
    primary: { // 主要色調
      light: "#63b8ff",
      main: "#FFF5B0",
      dark: "#005db0",
      contrastText: "#000"
    },
    secondary: { // 次要色調
      main: '#4db6ac',
      light: '#82e9de',
      dark: '#00867d',
      contrastText: '#000'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height='100vh' display='flex' flexDirection='column'>
        <h1>App</h1>
        <Router>
          {/* navigation */}
          <Routes>
            {routes.map((r) => (
              <Route key={r.key} path={r.path} element={<r.component />} />
            ))}
          </Routes>
          {/* footer */}
        </Router >
      </Box>
    </ThemeProvider>

  );
}

export default App;
