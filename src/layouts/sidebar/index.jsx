import './index.css';
let pages = [
    { name: "Region", href: "/region" },
    { name: "Country", href: "/country" },
    { name: "Fishes", href: "/fishes" },
    { name: "Type Water", href: "/typewater" },
    { name: "Admin Users", href: "/adminusers" },
]
function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="content display-flex space-between col">
                <div className="display-flex space-between col">
                    {
                        pages.map(page => {
                            return (
                                <a href={page.href} className="sidebarItem">
                                    {page.name}
                                </a>
                            )
                        })
                    }
                </div>
                <a href="" className="sidebarItem">
                    LogOut
                </a>
            </div>
        </div>
    );
}

export default Sidebar;
