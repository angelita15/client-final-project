import { Form } from 'react-bootstrap'
import './Search.css'

const SearchProducts = ({ filterProducts }) => {
    function handleInput(e) {
        filterProducts(e.target.value)
    }

    return (
        <Form className='formSearch'>
            <input type={'search'} placeholder={'Encuentra aqui tu producto favorito'} onChange={handleInput}></input>
        </Form>
    )
}

export default SearchProducts