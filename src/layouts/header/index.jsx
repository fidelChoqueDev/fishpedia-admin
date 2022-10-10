import './index.css';

function Header() {
  return (
    <div className="Header display-flex justify-content-center align-items-center">
      <a href="/">MainPage</a>
      <a href="/contact">Contact</a>
      <a href="/about">About</a>
    </div>
  );
}

export default Header;
