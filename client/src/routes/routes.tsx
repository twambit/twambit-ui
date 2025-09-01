import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
//import HomePage from '../pages/HomePage';
//import DashboardPage from '../pages/DashboardPage';
import LoginPage from '../auth/LoginPage';
import PromptManager from '../components/PromptManager';
import ChatSummary from '../components/ChatSummary';
import VideoChat from '../components/VideoChat';
//import ProfilePage from '../features/user/components/Profile';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/login" element={<LoginPage />} />
 
  
      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
       <Route path="/promptmanager" element={<PromptManager />} />
    <Route path="/chatSummary" element={<ChatSummary />} />
        <Route path="/chat" element={<VideoChat />} />
      </Route>
      
      {/* Fallback route for 404 */}
      <Route path="*" element={<div>404: Not Found</div>} />
    </Routes>
  );
};
