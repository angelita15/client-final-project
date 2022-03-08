
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EventsCard = ({ title, image, _id }) => {
    return (
        <Card className='EventsCard'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Link to={`/detalles/${_id}`}>
                    {/* <Card.date> {date}</Card.date> */}

                    {/* <Card.Text>
                                     Some quick example text to build on the card title and make up the bulk of
                                     the card's content.
                                 </Card.Text> */}
                    <Button variant="primary"> ver detalles del evento </Button>
                </Link>
            </Card.Body>
        </Card>

    )
}

export default EventsCard