import  Navbar  from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import  Container  from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
const NavbarComponent = ({user, handleLogout}) => {
    return ( 
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><img src={`${user.photoURL}`} alt="profile-pic-user" referrerPolicy="no-referrer" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end nav-btn-con">
                    <Button variant="danger" onClick={handleLogout}>Logout</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default NavbarComponent;