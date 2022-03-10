import { Container, Button, Figure } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { SocialButtons } from '../../components/Buttons/Buttons'
import { FacebookButtons } from '../../components/Buttons/Buttons'
import Eslogan from '../../components/Imagenes/imagenes'
import { Link } from 'react-router-dom'
import './IndexPage.css'

const { default: ControlledCarousel } = require("../../components/Carousels/Carousels")


const IndexPage = () => {

    return (
        <div className='text-center' >

            <ControlledCarousel />
            <div className="sidebarItem">
                <span className="sidebarTitle">SIGUENOS</span>
                <div className="sidebarSocial">
                    <SocialButtons />
                    <FacebookButtons />
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
          
            <Eslogan />

            <video src='../../videos/pexels-any-lane-5727374.mp4' autoPlay muted loop></video>
            
            <div className='indexButtons'>
            <Link to="/getAllEvents">
                <Button  className="button" size='lg'> Eventos </Button> </Link>
            <Link to="/getAllProducts">
                <Button  size='lg'> productos </Button> </Link>  
                </div>

        </div>
    )
}





export default IndexPage;