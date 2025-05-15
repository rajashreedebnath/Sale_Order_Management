
import { Box } from '@chakra-ui/react';
import { ColorModeButton } from './components/ui/color-mode';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Dashboard from './pages/Dashboard'
import { useAuth } from './context/AuthContext'


function App() {

  const { isAuthenticate } = useAuth();
  return (
    <Box style={{ width: '100%', height: '100vh', position: 'relative' }}>
      {/* Dark Mode Toggle */}
      <ColorModeButton position="absolute" top="10px" right="20px" size="lg" />


      {/* Page Content */}

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            isAuthenticate ? (
              <Dashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>


    </Box>
  );
}

export default App;
