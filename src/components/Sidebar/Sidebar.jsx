import { Link } from "react-router-dom";
import './Sidebar.css';

import { SocialButtons } from '../../components/Buttons/Buttons'
import { FacebookButtons } from '../../components/Buttons/Buttons'


const Sidebar =() => { 

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                
                <section className='text'> 
                    ¡Hola!
                    un placer conocerte tu mejor amiga de las tartas, lista para hacer los dulces de tus sueños
                    realidad!
                    Soy Karolina, estado horneado tartas y dulces para cada evento familiar desde que
                    nacieron mis hijos y hace tres años decidí crear una línea de postres y así nació Karolina Rueda Eventos,
                    apasionada de la repostería me enfoco especialmente en creaciones a medida para todas las necesidades
                    de tu celebración!
                    ¡Te mereces una tarta UNICA! ¿Entonces a que esperas?
                    
                </section> 
            </div>
           
            <div className="sidebarItem">
                <span className="sidebarTitle">SIGUENOS</span>
                <div className="sidebarSocial">
                    <SocialButtons />
                    <FacebookButtons />
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    );
}
export default Sidebar