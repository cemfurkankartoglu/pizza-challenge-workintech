import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function Header(props) {
  return (
    <div>
      <Navbar className="navbar">
        <Nav className="navbar-nav me-auto" navbar-nav>
          <NavItem><img src="../../images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler Logo" /></NavItem>
          <NavItem>
            <NavLink href="/">Anasayfa-</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">
              Seçenekler-
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">
              Sipariş Oluştur
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div >
  )
}