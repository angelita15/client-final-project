import IndexPage from './../pages/Indexpage/IndexPages';
import EventsListPage from './../pages/EventsPage/EventsListPage'
import EventDetailsPage from '../pages/EventDetailsPage/EventDetailsPage';

import CreateEventPage from '../pages/CreateEventPage/CreateEventPage';
import EventEditPage from '../pages/EventEditPage/EventEditPage';

import SignupPage from '../pages/SignupPage/SignupPage';
import LoginPage from '../pages/LoginPage/LoginPage';

import ContactPage from '../pages/ContactPage/ContactPage';

import ProductListPage from '../pages/ProductsListPage/ProductListPage';
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage';
import CreateProductPage from '../pages/CreateProductPage/CreateProductPage';
import ProductEditPage from '../pages/ProductEditPage/ProductEditPage';
import WritePage from '../pages/Write/WritePage'

import { Routes, Route } from 'react-router-dom'


function App() {
    return (
        <>

            <Routes>
                <Route element={<IndexPage />} path="/" />
                <Route element={<EventsListPage />} path="/getAllEvents" />
                <Route element={<EventDetailsPage />} path="detalles/:events_id" />
                <Route element={<CreateEventPage />} path="/crear" />
                <Route element={<EventEditPage />} path="/editEvent/:events_id" />

                <Route element={<ProductListPage />} path="/getAllProducts" />
                <Route element={<ProductDetailsPage />} path="/detalles/producto/:products_id" />
                <Route element={<CreateProductPage />} path="/crearProducto" />
                <Route element={<ProductEditPage />} path="/editProduct/:products_id" />

                <Route element={<ContactPage />} path="/contact" />

                <Route element={<SignupPage />} path="/registro" />
                
                <Route element={<LoginPage />} path="/inicioSesion" />
                <Route element={<WritePage />} path="/blog" />




            </Routes>

        </>
    );
}

export default App;
