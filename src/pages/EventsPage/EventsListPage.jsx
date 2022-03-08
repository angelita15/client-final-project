
import { useState, useEffect } from "react"
import eventsService from '../../services/events.service'
import { Container } from 'react-bootstrap'
import EventList from "../../components/EventList/EventList"
import './EventsPage.css'

const EventListPage = () => {

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
        </Container>


    )

}

export default EventListPage;