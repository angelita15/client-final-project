
import './ProductList.css'
import { useState, useEffect, useContext } from "react"
import ProductList from "../../components/ProductList/ProductList"
import { Container, Button } from 'react-bootstrap'
import productsService from "../../services/products.service"
import SearchProducts from '../../components/Search/Search'
import { Link } from 'react-router-dom'
import { SocialButtons } from '../../components/Buttons/Buttons'
import { FacebookButtons } from '../../components/Buttons/Buttons'
import { AuthContext } from '../../context/auth.contex'

const ProductListPage = () => {

    const { isLoggedIn } = useContext(AuthContext)
    let [products, setProducts] = useState([])

    let [productsCopy, setProductscopy] = useState([])

    useEffect(() => {
        //centraliza dentro del servicio  todas las llamadas a la api  
        productsService
            .getAllProducts()
            .then(({ data }) => {
                setProducts(data)
                setProductscopy(data)
            })
            .catch(err => console.log(err))
     


    }, [])


    function filterProducts(str) {
        let filteredProducts
        str ? filteredProducts = productsCopy.filter(elm => elm.title.includes(str))
            : filteredProducts = productsCopy
        setProducts(filteredProducts)
    }

    return (
        <Container>
            
            <h1>Nuestros productos!</h1>
            <SearchProducts filterProducts={filterProducts} />
            <ProductList products={products} />
            <SocialButtons />
            <FacebookButtons />
            {
                isLoggedIn &&
                <Link to="/crearProducto">
                    <Button size='lg'> Crear </Button>
                </Link>}
        </Container>

    )

}

export default ProductListPage;