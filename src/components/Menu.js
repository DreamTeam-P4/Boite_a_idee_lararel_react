import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
            <Navbar.Brand className='ms-3 font-weight-bold'>
                <h2>Idee</h2>
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className='ms-5'>
                    <NavDropdown title="Nos Pages">
                        <NavDropdown.Item href="/">Pages à idée</NavDropdown.Item>
                        <NavDropdown.Item href="/statistique">Pages statistique</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

            </Navbar.Collapse>
            <form className='mb-3'>
                <input className='form-control w-99' type="search" placeholder="Search" aria-label="Search" />
            </form>
            <button className="btn btn-outline-light mb-3" type="submit">Search</button>
        </Navbar>
    );
};
export default Menu;