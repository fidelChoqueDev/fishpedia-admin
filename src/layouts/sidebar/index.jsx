import "./index.css";
let pages = [
  { name: "Region", href: "/region" },
  { name: "Country", href: "/country" },
  { name: "Fishes", href: "/fishes" },

  { name: "Admin Users", href: "/register-page" },
];
function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="content display-flex space-between col">
        <div className="display-flex space-between col">
          {pages.map((page) => {
            return (
              <a href={page.href} key={page.href} className="sidebarItem">
                {page.name}
              </a>
            );
          })}
        </div>
        <a href="/login" className="sidebarItem">
          LogOut
        </a>
      </div>
    </div>
  );
}
export default Sidebar;
