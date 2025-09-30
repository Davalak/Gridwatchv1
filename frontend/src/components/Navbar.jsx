import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ background: "#222", padding: "10px" }}>
            <Link to="/" style={{ color: "#fff", marginRight: "15px", textDecoration: "none" }}>Dashboard</Link>
            <Link to="/devices" style={{ color: "#fff", marginRight: "15px", textDecoration: "none" }}>Devices</Link>
            <Link to="/outages" style={{ color: "#fff", textDecoration: "none" }}>Outages</Link>
        </nav>
    );
}

export default Navbar;