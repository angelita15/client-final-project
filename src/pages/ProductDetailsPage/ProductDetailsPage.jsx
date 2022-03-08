import { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import productsService from '../../services/products.service'
import { AuthContext } from '../../context/auth.contex'


const ProductDetailsPage = () => {
    const [productDetails, setProductDetails] = useState({})
    const [loading, setLoading] = useState(true)
    const { products_id } = useParams()
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AuthContext)


    useEffect(() => {
        loadProduct()
    }, [])

    const loadProduct = () => {
        productsService
            .getOneProducts(products_id)
            .then(({ data }) => {
                setProductDetails(data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    const deleteProduct = () => {
        productsService
            .deleteOneProducts(products_id)
            .then(() => {
                navigate('/getAllProducts')
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {
                loading
                    ? <h1>Cargando</h1>
                    : <Container className='hero'>
                        <h2> Detalles de {productDetails.title} </h2>
                        <Row className="d-flex justify-content-center aling-items-center">
                            <Col md={4}>
                                <h4> Informacion </h4>
                                <p> {productDetails.description}</p>

                                <h4> detalles </h4>
                                <p> precio {productDetails.price} </p>
                                <p> tipo {productDetails.type} </p>
                                <p> tamaño {productDetails.size} </p>

                            </Col>
                            <Col md={6}>
                                <img style={{ width: '75%' }} src={productDetails.images} alt={productDetails.title} />
                            </Col>

                            <Link to="/getAllProducts">
                                <Button variant="outline-primary" size='lg'> volver a todos los productos </Button>
                            </Link>
                            {
                                isLoggedIn &&
                                <Link to="/crearProducto">
                                    <Button variant="outline-primary" size='lg'> crear </Button>
                                </Link>}

                            {
                                isLoggedIn &&
                                <Button variant="light" onClick={deleteProduct}>Borrar producto</Button>
                            }

                            {
                                isLoggedIn &&
                                <Link to={`/editProduct/${products_id}`}>
                                    <Button variant="outline-primary" size='lg'> EDITAR </Button>
                                </Link>
                            }


                        </Row>
                    </Container>
            }
        </>

    )
}
export default ProductDetailsPage