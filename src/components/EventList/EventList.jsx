import { Row, Col } from 'react-bootstrap'
import EventCard from '../EventCard/EventCard'

const EventList = ({ events }) => {
    return (
        <Row>
            {events.map(events => {
                return (
                    <Col md={4} key={events._id}>
                        <EventCard  {...events} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default EventList 