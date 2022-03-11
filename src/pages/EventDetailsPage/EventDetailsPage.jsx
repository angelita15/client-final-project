import { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import eventsService from '../../services/events.service'
import { AuthContext } from '../../context/auth.contex'


const EventDetailsPage = () => {
    const [eventDetails, setEventDetails] = useState({})
    const [loading, setLoading] = useState(true)
    const { events_id } = useParams()
    const navigate = useNavigate()
    const { isLoggedIn } = useContext(AuthContext)

    useEffect(() => {
        loadEvent()
    }, [])

    const loadEvent = () => {
        eventsService
            .getOneEvents(events_id)
            .then(({ data }) => {
                setEventDetails(data)
                setLoading(false)
            })
            .catch(err => console.log(err))

    }

    const deleteEvent = () => {
        eventsService
            .deleteOneEvents(events_id)
            .then(() => {
                navigate('/getAllEvents')
            })
            .catch(err => console.log(err))

    }

    return (
        <>
            {
                loading
                    ? <h3>Cargando</h3>
                    : <Container className='hero'>
                        <h2>Evento: {eventDetails.title} </h2>
                        <Row className="d-flex justify-content-center aling-items-center">
                            <Col md={4}>
                                <h4> Información </h4>
                                <section className='text'> {eventDetails.description}</section>
                                <br></br>
                                <h4> Detalles </h4>
                                <section className='text'> Fecha: {eventDetails.date.slice(0, 10)} </section>
                                <section className='text'> Calle: {eventDetails.address.street.streetName}   </section>
                                    <section className='text'>  Nº: {eventDetails.address.street.streetNumber}  </section>
                                    <section className='text'> Ciudad: {eventDetails.address.city} </section>
                                <section className='text'>  CP: {eventDetails.address.postCode} </section>
                            </Col>
                            <Col md={6}>
                                <img style={{ width: '75%' }} src={eventDetails.image} alt={eventDetails.title} />
                            </Col>

                            <div className='stileBottons'> 
                            <Link to="/getAllEvents">
                                <Button  size='lg'> volver </Button>
                            </Link>

                            {
                                isLoggedIn &&
                                <Link to={''}>
                                <Button  onClick={deleteEvent}>Borrar evento</Button>
                                </Link>
                            }


                            {
                                isLoggedIn &&
                                <Link to={`/editEvent/${events_id}`}>
                                    <Button  size='lg'> Editar </Button>
                                </Link>
                            }
                            {
                                isLoggedIn &&
                                <Link to="/crear">
                                    <Button size='lg'> Crear </Button>
                                </Link>
                            }
                            </div>
                        </Row>
                    </Container>
            }
        </>

    )
}
export default EventDetailsPage