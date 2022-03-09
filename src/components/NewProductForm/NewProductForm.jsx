import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import productsService from '../../services/products.service.js'
import uploadService from '../../services/upload.service'
import { useNavigate } from 'react-router-dom'


const NewProductForm = () => {
    const [productData, setProductData] = useState({
        title: '',
        description: '',
        price: '',
        size: '',
        type: '',
        images: []
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const { title, description, price, size, type } = productData

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target

        setProductData({
            ...productData,     
            [name]: value   
        })

    }

    const uploadProductImages = e => {
        setLoadingImage(true)

        console.log(e.target.files)

        const uploadData = new FormData()
        for (let i = 0; i < e.target.files.length; i++) {
            uploadData.append('imagesData', e.target.files[i])
        }

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setProductData({ ...productData, images: data.cloudinary_urls })
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {
        e.preventDefault()

        productsService
            .createProducts(productData)
            .then(({ data }) => navigate('/getAllProducts'))
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="title" value={title} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" name="description" value={description} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>precio</Form.Label>
                <Form.Control type="text" name="price" value={price} onChange={handleInputChange} />
            </Form.Group>
            
             <Form.Group className="mb-3">
                <Form.Label>tamaño</Form.Label>
                <Form.Select
                    name="size"
                    type="text"
                    onChange={handleInputChange}
                    value={size}
                    aria-label="Default select example"
                >
                    <option>Selecciona</option>
                    <option value="SMALL">PEQUEÑO</option>
                    <option value="MEDIUM">MEDIANO</option>
                    <option value="LARGE">GRANDE</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>tipo</Form.Label>
                <Form.Select
                    name="type"
                    type="text"
                    onChange={handleInputChange}
                    value={type}
                    aria-label="Default select example"
                >
                    <option>Selecciona</option>
                    <option value="oreo">oreo</option>
                    <option value="chocolate">chocolate</option>
                    <option value="dulce de leche">dulce de leche</option>
                    <option value="vainilla">vainilla</option>
                    <option value="red velvet">red velvet</option>
                    <option value="tres chocolates">tres chocolates</option>
                    <option value="chocolate blanco">chocolate blanco</option>
                    <option value="brownie">brownie</option>
                    <option value="chocolate y menta">chocolate y menta</option>
                    <option value="kinder bueno">kinder bueno</option>
                    <option value="cookie cream">cookie cream</option>
                    <option value="zanahoria">zanahoria</option>
                    <option value="mango">mango</option>
                    <option value="fresa">fresa</option>
                    <option value="platano">platano</option>
                </Form.Select>
            </Form.Group>

            <Form.Group controlId="productImage" className="mb-3">
                <Form.Label> imagenes </Form.Label>
                <Form.Control type="file" onChange={uploadProductImages} multiple />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={loadingImage}>{loadingImage ? 'Espere...' : 'Crear producto'}

            </Button>
        </Form>

    )

}

export default NewProductForm