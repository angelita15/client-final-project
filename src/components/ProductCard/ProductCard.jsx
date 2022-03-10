
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductsCard = ({ title, images, _id }) => {
    return (
        <Card className='ProductsCard'>
            <Card.Img src={images[0]} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Link to={`/detalles/producto/${_id}`}>
                    <Button variant="primary"> ver detalles del producto </Button>
                </Link>
            </Card.Body>
        </Card>

    )
}

export default ProductsCard