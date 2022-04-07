import '../Links/links.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Links (){
    return(
        <div className= "Links-container">
        
        <div className="Links-header">
         <Link to="/">
          <FiArrowLeft size={38} color="#FFF" />
         </Link>
         <h1>Meus Links</h1>
        </div>

        <div className="Links-item">
            <button className="link">
                <FiLink size={18} color="#FFF" />
                https://google.com
            </button>
            <button className="Link-delete">
                <FiTrash size={18} color="#FF5454"/>
            </button>                   
        </div>

        <div className="Links-item">
            <button className="link">
                <FiLink size={18} color="#FFF" />
                https://google.com
            </button>
            <button className="Link-delete">
                <FiTrash size={18} color="#FF5454"/>
            </button>                   
        </div>
            
    </div>
  )
}