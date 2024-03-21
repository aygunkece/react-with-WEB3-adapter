function SidebarMenu() {
    return (
        <nav id="myNavbar" className="navbar fixed_side_menu d-none d-sm-block">
            <ul className="navbar-nav mr-auto nav-pills flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#Vision">Our Vision</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Features">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Token">Token</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Roadmap">Roadmap</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#FAQ">FAQ</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Team">Team</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default SidebarMenu;