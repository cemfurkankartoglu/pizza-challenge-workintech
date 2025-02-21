import "bootstrap/dist/css/bootstrap.min.css";
import "./Success.css"
import { 
    Navbar,
    Nav,
    NavItem,
    NavLink,
    } from "reactstrap";

export default function Success(props) {
    return (
        <div>
        <Navbar className="navbar">
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/">Anasayfa</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">
                  Seçenekler
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">
                  Sipariş Oluştur
                </NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    )
}