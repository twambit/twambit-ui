import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
  <nav className="site-navbar">
  
      {isAuthenticated ? (
        <>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
        Home
      </NavLink>
         <NavLink to="/promptmanager" className={({ isActive }) => isActive ? "active" : ""}>
        Prompt Manager
      </NavLink>
         <NavLink to="/chatSummary" className={({ isActive }) => isActive ? "active" : ""}>
       Chat Summary
      </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
            Dashboard
          </NavLink>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>
          Login
        </NavLink>
      )}
    </nav>
  );
};