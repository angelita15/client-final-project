
import './ProductList.css'

import { useState, useEffect } from "react"
import ProductList from "../../components/ProductList/ProductList"
import { Container } from 'react-bootstrap'
import productsService from "../../services/products.service"

const ProductListPage = () => {

    let [products, setProducts] = useState([])

    useEffect(() => {
        //centraliza dentro del servicio  todas las llamadas a la api  
        productsService
            .getAllProducts()
            .then(({ data }) => setProducts(data))
            .catch(err => console.log(err))

            
            


    }, [])

    return (
        <Container>
            <h1> aqui van estar mis PRODUCTOS!!!! :</h1>
            <ProductList products={products} />
        </Container>


    )

}

export default ProductListPage;