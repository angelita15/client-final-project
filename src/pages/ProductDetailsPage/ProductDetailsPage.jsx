import { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import productsService from '../../services/products.service'
import { AuthContext } from '../../context/auth.contex'
import './ProductDetailsPage.css'


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
                        <h2> {productDetails.title} </h2>
                        <Row className="d-flex justify-content-center align-items-center">
                            <Col md={4}>
                                <h4> Información </h4>
                                <p> {productDetails.description}</p>
                                <br></br>
                                <h4> Detalles </h4>
                                <p> Precio: {productDetails.price} </p>
                                <p> Tipo: {productDetails.type} </p>
                                <p> Tamaño: {productDetails.size} </p>

                            </Col>
                            <Col md={6}>

                              <Carousel> 
                                {productDetails.images?.map((image) => {
                                    return (
                                        <Carousel.Item> 
                                            <img style={{ width: '80%' }} src={image} alt={image} />
                                        </Carousel.Item>
                                    )
                                }) }
                               </Carousel>


                            </Col>

                            <div className='stileBottons'> 
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
                                <Link to={''}>
                                        <Button variant="outline-primary" onClick={deleteProduct}>Borrar producto</Button>
                                </Link>
                            }

                            {
                                isLoggedIn &&
                                <Link to={`/editProduct/${products_id}`}>
                                    <Button variant="outline-primary" size='lg'> EDITAR </Button>
                                </Link>
                            }
                            </div>

                        </Row>
                    </Container>
                    
            }
        </>

    )
}
export default ProductDetailsPage