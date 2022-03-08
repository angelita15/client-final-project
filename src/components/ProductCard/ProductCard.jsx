
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductsCard = ({ title, images, _id }) => {
    return (
        <Card className='ProductsCard'>
            <Card.Img variant="top" src={images[0]} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Link to={`/detalles/producto/${_id}`}>
                    {/* <Card.date> {date}</Card.date> */}

                    {/* <Card.Text>
                                     Some quick example text to build on the card title and make up the bulk of
                                     the card's content.
                                 </Card.Text> */}
                    <Button variant="primary"> ver detalles del producto </Button>
                </Link>
            </Card.Body>
        </Card>

    )
}

export default ProductsCard