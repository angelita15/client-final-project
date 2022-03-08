import {Container, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NewEventForm from '../../components/NewEventForm/NewEventForm'

const CreateEventPage= ()=> { 
    return(
    <Container>
    
    <h1> Nuevo evento</h1>
    <NewEventForm/>
    <Link to="/">
     <Button variant="outline-primary" className="button" size='lg'> eventitos </Button>
    </Link>
    </Container>
     ) }

export default CreateEventPage