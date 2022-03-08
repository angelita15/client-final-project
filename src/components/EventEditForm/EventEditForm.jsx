import { Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import eventsService from '../../services/events.service'
import uploadService from '../../services/upload.service'
import { useNavigate, useParams } from 'react-router-dom'


const EventEditForm = () => {
    const {events_id} = useParams()
    console.log(events_id)
    const navigate = useNavigate()

    const [loadingImage, setLoadingImage] = useState(false)
    const [loadingEvent, setLoadingEvent] = useState(true)
    const [eventEdit, setEventEdit] = useState({
        title: '',
        description: '',
        date: '',
        streetName: '',
        streetNumber: '',
        postCode: '',
        city: '',
        image: ''
    })
    
    const { title, description, date, streetName, streetNumber, postCode, city, image } = eventEdit
    
    useEffect(() => {
      eventsService
        .getOneEvents(events_id)
        .then(({data})=> {
            const { title, description, date, address: { street: {streetName, streetNumber}, postCode, city}, image } = data
            const editedEvent = { title, description, date, streetName, streetNumber, postCode, city, image}
            setEventEdit(editedEvent)
            setLoadingEvent(false)
        })
    }, [])
    
    const handleInputChange = e => {
        const { name, value } = e.target

        setEventEdit({
            ...eventEdit,    
            [name]: value    
        })

    }

    const uploadEventImage = e => {
        setLoadingImage(true)

        const uploadData = new FormData()   
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setEventEdit({ ...eventEdit, image: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {
        e.preventDefault()

        eventsService
            .putOneEvents(events_id, eventEdit)
            .then(() => {
                navigate('/getAllEvents')
                // navigate(`/detalles/${_id}`)
            })
            .catch(err => console.log(err))
    }
    

    return loadingEvent 
    ? <h1>Cargando</h1>
    : (
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

            <Button variant="primary" type="submit" disabled={loadingImage}>{loadingImage ? 'Espere...' : 'Modificar evento'}

            </Button>
        </Form>

    )

}

export default EventEditForm