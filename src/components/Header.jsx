import { useAuth } from '../auth/useAuth';
import { Navbar } from './Navbar';

function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <h1>Twambit - Safe way to chat with humans, no AI </h1>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;