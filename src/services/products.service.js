import axios from 'axios'

class ProductsService {
    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/products` })
    }

    getAllProducts = () => {
        return this.api.get('/getAllProducts')
    }

    getOneProducts = product_id => {
        return this.api.get(`/getOneProduct/${product_id}`)

    }

    createProducts = product => {
        return this.api.post(`/createProducts`, product)
    }


    putOneProducts = product_id => {
        return this.api.put(`/getOneProduct/${product_id}/edit`)
    }


    deleteOneProducts = product_id => {
        return this.api.delete(`/deleteOneProduct/${product_id}/`)
    }


}

const productsService = new ProductsService()

export default productsService