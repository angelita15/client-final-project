import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from '../../components/ContactForm/ContactForm'
import './ContactPage.css'



const ContactPage = () => {

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={8}>
                    <img className='contactimg' src='../../imagenes/IMG_6840SS.jpg' />
                </Col>
            </Row>
            <Row className="justify-content-center my-5">
                <Col md={6}>


                    <h2>HOSTELERÍA Y EVENTOS </h2>
                    <h3>Contacta con nosotros</h3>
                    <p>Si tienes cualquier duda, o pedido mándanos un e-mail y te respondere lo antes posible</p>
                    <ContactForm />
                </Col>
            </Row>
            <hr />
            <Row className="justify-content-center">

                <h3>¿QUIERES TENER NUESTRAS TARTAS EN TU RESTAURANTE?</h3>
                <Col md={6}>
                    <section className='text'>
                        hacemos productos artesanales y frescos a diario para distintos clientes, adaptándonos a las necesidades y gustos de cada uno
                        nuestra especilidad son las tartas personalizadas! imaginalo y nostros lo creamos!
                    </section>
                </Col>
                <Col md={6}>
                    <section className='text'>
                        Escríbenos a: karolinaruedapagina@gmail.com o llámanos: +34 625 22 63 20
                    </section>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactPage