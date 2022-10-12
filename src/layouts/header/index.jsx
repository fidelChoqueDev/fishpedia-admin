import './index.css';
import logo from "../../assets/logo_dark-blue.png"
let routes = [
  { href: "/contact", text: "Contact" },
  { href: "/about", text: "About" }
]
function Header() {
  return (
    <div className="Header display-flex justify-content-center">
      <div className="routes display-flex space-between align-items-center">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className='route'>
          {routes.map(route => {
            return (
              <a key={route.href} href={route.href}>{route.text}</a>
            )
          })}
        </div>
        <div className="mobileRoute display-flex align-items-center justify-content-center">
          <div className="menu">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="menu-content">
              <div className="route">
                {routes.map(route => {
                  return (
                    <a key={route.href} href={route.href}>{route.text}</a>
                  )
                })}

              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Header;
