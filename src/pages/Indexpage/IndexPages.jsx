import { Container, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { SocialButtons } from '../../components/Buttons/Buttons'
import { FacebookButtons } from '../../components/Buttons/Buttons'

import { Link } from 'react-router-dom'
import './IndexPage.css'
const { default: ControlledCarousel } = require("../../components/Carousels/Carousels")


const IndexPage = () => {

    return (
        <div className='text-center'>

            <ControlledCarousel />
            <SocialButtons />
            <FacebookButtons />

{/* 
            <div className='imaginalo'>
                <img src="../../imagenes/fondo.png" alt="fondo" />
            </div> */}





            <video src='../../videos/pexels-any-lane-5727374.mp4' autoPlay muted loop></video>

            <Link to="/getAllEvents">
                <Button variant="outline-primary" className="button" size='lg'> Eventos </Button> </Link>
            {/* <Link to="/getAllProducts">
                <Button variant="dark" size='lg'> productos </Button> </Link>   */}

        </div>
    )
}





export default IndexPage;