import { Container, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import { Link } from 'react-router-dom'
import './IndexPage.css'
const { default: ControlledCarousel } = require("../../components/Carousels/Carousels")


const IndexPage = () => {

    return (
        <div className='text-center'>

            <ControlledCarousel />

            <div className='box'>
                {/* <h1> Nuestras tartas son caseras y artesanas,
                    como las de siempre pero con la chispa de creatividad que marca la diferencia! </h1>
                <h2>
                    imaginalo nostros lo creamos!
                </h2> */}
            </div>

            <video src='../../videos/pexels-any-lane-5727374.mp4' autoPlay muted loop></video>

            <Link to="/getAllEvents">
                <Button variant="outline-primary" className="button" size='lg'> eventitos </Button> </Link>
            {/* <Link to="/getAllProducts">
                <Button variant="dark" size='lg'> productos </Button> </Link>   */}

        </div>
    )
}





export default IndexPage;