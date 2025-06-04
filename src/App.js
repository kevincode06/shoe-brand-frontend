import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NikePage from './pages/NikePage';
import AdidasPage from './pages/AdidasPage';
import PumaPage from './pages/PumaPage';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute';
import Unauthorized from './pages/UnauthorizedPage';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route
            path="/nike"
            element={
              <ProtectedRoute allowedBrands={['nike']}>
                <NikePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adidas"
            element={
              <ProtectedRoute allowedBrands={['adidas']}>
                <AdidasPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/puma"
            element={
              <ProtectedRoute allowedBrands={['puma']}>
                <PumaPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={['super_admin']}>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
