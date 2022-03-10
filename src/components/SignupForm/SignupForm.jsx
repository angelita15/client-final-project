import { useState,  } from "react"
import { Form, Button } from 'react-bootstrap'
import authService from "../../services/auth.service"
import  {useNavigate} from 'react-router-dom'

function SignupForm() {

    const [signupForm, setSignupForm] = useState({
        username: "",
        password: "",
        email: ""
    })

    const { username, password, email} = signupForm

    const navigate= useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setSignupForm({
            ...signupForm,
            [name]: value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        authService
         .signup(signupForm)
         .then(({data}) => console.log(data))
         .catch(err => console.log(err))
         navigate('/')
    }

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" name="username" value={signupForm.username} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={signupForm.email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="password" value={signupForm.password} onChange={handleInputChange} />
            </Form.Group>

            <Button type="submit" style={{ width: '100%' }}>Acceder</Button>

        </Form>
    )
}

export default SignupForm