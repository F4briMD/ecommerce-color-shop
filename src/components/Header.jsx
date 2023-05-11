import { Link } from "react-router-dom";
import '../css/Header.css'

/*export default function Header() {

    return (
        <div>
            <header>
                <div className="container-header">
                    <div className="logo">
                        <Link to='/'><span>COLOR</span></Link>
                    </div>

                    <div className="nav-links">
                        <nav>
                            <ul>
                                <li><Link className="label-link" to="/">Inicio</Link></li>
                                <li><Link className="label-link" to="/registro">Registrar</Link></li>
                                <li><Link className="label-link" to="/login">Ingresar</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="buscador">
                        <input type="text" id="buscarid" class="buscarid" placeholder="Buscar..." />
                    </div>
                </div>
            </header>
        </div>
    )
}*/
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {


    return (
        <Navbar bg="light" expand="lg"  >
            <Container fluid style={{ maxWidth: '1280px', display: 'flex', justifyContent: 'space-between', marginLeft: 'auto', marginRight: 'auto' }}>
                <Link className="logo" to='/'><span>COLOR</span></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '150px' }}
                        navbarScroll
                    >
                        <Link className="label-link" to='/'>Inicio</Link>
                        <Link className="label-link" to='productos'>Nuestros Productos</Link>
                        <Link className="label-link" to='registro'>Register</Link>
                        <Link className="label-link" to='login'>Iniciar sesion</Link>
                        
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Buscar..."
                            className="me-2"
                            aria-label="Search"
                        />

                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;