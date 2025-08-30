import { useAuth } from '../auth/useAuth';
import { Navbar } from './Navbar';

// function Header() {
//   const { user, logout } = useAuth();

//   return (
//     <header>
//       {user ? (
//         <>
//           <span>Welcome, {user.name}</span>
//           <button onClick={logout}>Log Out</button>
//         </>
//       ) : (
//         <span>Please log in</span>
//       )}
//     </header>
//   );
// }


function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <h1>My App</h1>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;