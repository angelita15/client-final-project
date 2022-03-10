
import './ProductList.css'
import { useState, useEffect } from "react"
import ProductList from "../../components/ProductList/ProductList"
import { Container } from 'react-bootstrap'
import productsService from "../../services/products.service"
import SearchProducts from '../../components/Search/Search'

import { SocialButtons } from '../../components/Buttons/Buttons'
import { FacebookButtons } from '../../components/Buttons/Buttons'

const ProductListPage = () => {

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
        </Container>

    )

}

export default ProductListPage;