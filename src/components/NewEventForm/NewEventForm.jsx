import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import eventsService from '../../services/events.service'
import uploadService from '../../services/upload.service'
import { useNavigate } from 'react-router-dom'


const NewEventForm = () => {
    const [eventData, setEventData] = useState({
        title: '',
        description: '',
        date: '',
        address: {
            street: {
                streetName: '',
                streetNumber: '',
            },
            postCode: '',
            city: ''
        },
        image: ''
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const { title, description, date, streetName, streetNumber, postCode, city, image } = eventData

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target

        setEventData({
            ...eventData,     // "duplico el objeto para que no modifique el estado inicial"
            [name]: value    // con name me traigo el nombre de cada campo 
        })

    }

    const uploadEventImage = e => {

        setLoadingImage(true)


        console.log(e.target.files)

        const uploadData = new FormData()   //simula un formulario para el servidor 
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setEventData({ ...eventData, image: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {
        e.preventDefault()

        eventsService
            .createEvent(eventData)
            .then(({ data }) => navigate('/getAllEvents'))
            .catch(err => console.log(err))
    }
    //cada enpont del back es un servicio del front 99%

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="title" value={title} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="date" name="date" value={date} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" name="description" value={description} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Calle</Form.Label>
                <Form.Control type="text" name="streetName" value={streetName} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Número</Form.Label>
                <Form.Control type="number" name="streetNumber" value={streetNumber} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Código postal</Form.Label>
                <Form.Control type="number" name="postCode" value={postCode} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Ciudad</Form.Label>
                <Form.Control type="text" name="city" value={city} onChange={handleInputChange} />
            </Form.Group>


            <Form.Group controlId="eventImage" className="mb-3">
                <Form.Label> imagen </Form.Label>
                <Form.Control type="file" onChange={uploadEventImage} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={loadingImage}>{loadingImage ? 'Espere...' : 'Crear evento'}

            </Button>
        </Form>

    )

}

export default NewEventForm