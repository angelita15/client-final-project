
import { useState, useEffect, useContext } from "react"
import eventsService from '../../services/events.service'
import { Container, Button } from 'react-bootstrap'
import EventList from "../../components/EventList/EventList"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.contex'

import { SocialButtons } from '../../components/Buttons/Buttons'
import { FacebookButtons } from '../../components/Buttons/Buttons'
import './EventsPage.css'

const EventListPage = () => {
    const { isLoggedIn } = useContext(AuthContext)

    let [events, setEvents] = useState([])

    useEffect(() => {
        //centraliza dentro del servicio  todas las llamadas a la api  
        eventsService
            .getAllEvents()
            .then(({ data }) => setEvents(data))
            .catch(err => console.log(err))


    }, [])

    return (
        <Container>
            <h1> Nuestros Eventos</h1>
            <EventList events={events} />
            <SocialButtons />
            <FacebookButtons />
            {
                isLoggedIn &&
                <Link to="/crear">
                    <Button size='lg'> Crear </Button>
                </Link>
            }
        </Container>


    )

}

export default EventListPage;