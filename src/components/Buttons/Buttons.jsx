import './Buttons.css'

const SocialButtons = () => {
    return (
        <a href='https://www.instagram.com/karolinaruedaeventos/' target='_blank' rel='noreferrer'>
            <img src="./../../imagenes/instagram1.png" alt="instagram" className='SocialButtons' />
        </a>

    )
}

const FacebookButtons = () => {
    return (<a href='https://www.facebook.com/Karolina-Rueda-Eventos-493238560847852/' target='_blank' rel='noreferrer' >
        <img src="../../imagenes/facebook .png" alt="facebook" className='SocialButtons' />
    </a>

    )
}
export { SocialButtons, FacebookButtons }


