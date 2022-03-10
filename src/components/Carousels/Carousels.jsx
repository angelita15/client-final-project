import "./Carousels.css"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval={1000}>
                <img
                    className="carImg"
                    src="../imagenes/IMG_6840.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="tituloSlider">TARTAS</h3>
                    <p className="parrafoSlider"> 100% Artesanas.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className=" carImg"
                    src="../imagenes/IMG_6842.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption >
                    <h3 className="tituloSlider">DÍA DE LA MADRE</h3>
                    <p className="parrafoSlider">Para disfrutar en familia.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className=" carImg"
                    src="../imagenes/IMG_6843.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption >
                    <h3 className="tituloSlider"> CUMPLE AÑOS</h3>
                    <p className="parrafoSlider">Celebra tu día con nosotros.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className=" carImg"
                    src="../imagenes/IMG_6841.jpg"
                    alt="Four slide"
                />


                <Carousel.Caption>
                    <h3 className="tituloSlider">DULCES DE LUJO</h3>
                    <p className="parrafoSlider">
                       Experiencia gastronómica.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel