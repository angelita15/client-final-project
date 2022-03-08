import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { AuthContext } from './../../context/auth.contex'
import { useContext } from 'react'



const Navigation = () => {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='nav mx-auto'>
                        <NavLink to="/">
                            <Nav.Link as="span">Inicio</Nav.Link>
                        </NavLink>
                        <NavLink to="/getAllProducts">
                            <Nav.Link as="span">Productos</Nav.Link>
                        </NavLink>
                        <NavLink to="/blog">
                            <Nav.Link as="span">Blog</Nav.Link>
                        </NavLink>
                        <NavLink to="/">
                            <img className='logo' src='../imagenes/logo.png' />
                        </NavLink>
                        <NavLink to="/getAllEvents">
                            <Nav.Link as="span">Eventos</Nav.Link>
                        </NavLink>
                        <NavLink to="/contact">
                            <Nav.Link as="span">Contacto</Nav.Link>
                        </NavLink>


                        {
                            !isLoggedIn ?
                                <div className='buttons'>
                                    <NavLink to="/inicioSesion">
                                        <img className='home' src='../imagenes/casa-icono.png' />
                                    </NavLink>

                                    <NavLink to="/registro">
                                        <img className='user' src='../imagenes/user.png' />
                                    </NavLink>
                                </div>
                                :
                                <>
                                    <Nav.Link as="span">Hola, {user?.username}</Nav.Link>¡
                                    <Nav.Link as="span" onClick={logOutUser}>Cerrar sesión</Nav.Link>
                                </>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navigation