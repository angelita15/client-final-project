import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NewProductForm from '../../components/NewProductForm/NewProductForm'


const CreateProductPage = () => {
    return (
        <Container>

            <h1> Nuevo Producto</h1>
            <NewProductForm />
            <Link to="/">
                <Button variant="outline-primary" className="button" size='lg'> productos </Button>
            </Link>
        </Container>
    )
}

export default CreateProductPage