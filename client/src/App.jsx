// import VideoChat from './components/VideoChat';
import { AuthProvider } from './auth/AuthProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import {Navbar} from './components/Navbar';

import { AppRoutes } from './routes/routes';
const App = () => {
  return (
      <AuthProvider>
     <Header /> 
      <Navbar />
      <h1>Twambit H2H Communicate</h1>
        <AppRoutes />
        <Footer />
     </AuthProvider>
  );
};

export default App;