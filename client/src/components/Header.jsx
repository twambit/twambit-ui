import { useAuth } from '../auth/useAuth';

function Header() {
  const { user, logout } = useAuth();

  return (
    <header>
      {user ? (
        <>
          <span>Welcome, {user.name}</span>
          <button onClick={logout}>Log Out</button>
        </>
      ) : (
        <span>Please log in</span>
      )}
    </header>
  );
}

export default Header;