
import "./Write.css";
import Sidebar from '../../components/Sidebar/Sidebar'
const Write =() => {

    return (
        <div className="write">

            <img
                className="writeImg"
                src="../../../imagenes/pexels-matheus-guimarães-1291712.jpg"
                alt=""
            />
            <form className="writeForm">
               
                <div className="writeFormGroup">
                    <textarea
                        className="writeInput writeText"
                        placeholder=" escribir..."
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <button className="writeSubmit" type="submit">
                    Publicar
                </button>
            </form>

            < Sidebar /> 
        </div>
      
      
       
    )
       
      
}

export default Write