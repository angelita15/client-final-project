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
                    ? <h1>Cargando</h1>
                    : <Container className='hero'>
                        <h2> Detalles de {eventDetails.title} </h2>
                        <Row className="d-flex justify-content-center aling-items-center">
                            <Col md={4}>
                                <h4> Informacion </h4>
                                <p> {eventDetails.description}</p>

                                <h4> detalles </h4>
                                <p> fecha {eventDetails.date} </p>
                                <p> direccion {eventDetails.address.street.streetName}
                                    {eventDetails.address.street.streetNumber}
                                    {eventDetails.address.city}
                                    {eventDetails.address.postCode} </p>
                            </Col>
                            <Col md={6}>
                                <img style={{ width: '75%' }} src={eventDetails.image} alt={eventDetails.title} />
                            </Col>
                            <Link to="/getAllEvents">
                                <Button variant="outline-primary" size='lg'> volver a todos los eventitos </Button>
                            </Link>

                            {
                                isLoggedIn &&

                                <Button variant="light" onClick={deleteEvent}>Borrar evento</Button>
                            }

                            {
                                isLoggedIn &&
                                <Link to={`/editEvent/${events_id}`}>
                                    <Button variant="outline-primary" size='lg'> EDITAR </Button>
                                </Link>
                            }
                            {
                                isLoggedIn &&
                                <Link to="/crear">
                                    <Button variant="outline-primary" size='lg'> crear </Button>
                                </Link>
                            }
                        </Row>
                    </Container>
            }
        </>

    )
}
export default EventDetailsPage