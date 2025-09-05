import {BrowserRouter, useLocation } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider';
import Header from './components/Header';
import UserList from './features/users/UserList'; 

import { AppRoutes } from './routes/routes';

function AppContent() {
  const location = useLocation();
  const hideHeader = location.pathname === '/login';

  return (
    <>
      {!hideHeader && <Header />} {/* Conditionally render the Header */}
      <AppRoutes />
      <UserList />
    </>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />  
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;