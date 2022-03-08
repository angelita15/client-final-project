
import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import emailService from "../../services/email.service"
import './ContactForm.css'


function ContactForm() {
    const [contactForm, setContactForm] = useState({
        email: '',
        message: '',
        title: ''
    })
    const navigate = useNavigate()

    const handleInputChange = e => {

        const { name, value } = e.target
        setContactForm({ ...contactForm, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
       
        emailService
        .contact(contactForm)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        navigate('/')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="title" value={contactForm.title} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={contactForm.email} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" name="message" style={{ height: '100px' }} value={contactForm.message} onChange={handleInputChange} />
            </Form.Group>
            <Button type="submit" style={{ width: '100%' }}>Enviar</Button>

        </Form>
    )
}

export default ContactForm