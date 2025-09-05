import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white">
  <div className="container mx-auto px-4 md:flex items-center gap-6">
    <div className="flex items-center justify-between md:w-auto w-full">
      {/* {isAuthenticated ? (
        <>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
        Home
      </NavLink>
         <NavLink to="/promptmanager" className={({ isActive }) => isActive ? "py-2 px-3 block active" : ""}>
        Prompt Manager
      </NavLink>
         <NavLink to="/chatSummary" className={({ isActive }) => isActive ? "active" : ""}>
       Chat Summary
      </NavLink>
          <NavLink to="/chat" className={({ isActive }) => isActive ? "active" : ""}>
            Chat
          </NavLink>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>
          Login
        </NavLink>
      )} */}
      </div>
      </div>
    </nav>
  );
};