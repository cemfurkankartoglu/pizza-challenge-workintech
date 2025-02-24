import "./Nav.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navbar">
            <NavLink to="/" exact activeClassName="active-link" className="nav-link">Anasayfa-</NavLink>
            <NavLink to="/order" activeClassName="active-link" className="nav-link">Sipariş Oluştur</NavLink>
        </nav>
    )
}