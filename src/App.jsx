import {BrowserRouter, useLocation } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider';
import Header from './components/Header';
import Footer from './components/Footer';

import { AppRoutes } from './routes/routes';

function AppContent() {
  const location = useLocation();
  const hideHeader = location.pathname === '/login';

  return (
    <>
      {!hideHeader && <Header />} {/* Conditionally render the Header */}
      <AppRoutes />
    </>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
        <Footer />    
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;