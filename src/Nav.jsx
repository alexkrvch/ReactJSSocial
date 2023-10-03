const Nav = () => {
    return (
        <nav>
            <div className="sidebar">
                <div className="sidebar-header">
                    <h3>Social Network</h3>
                </div>
                <ul className="sidebar-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Friends</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;