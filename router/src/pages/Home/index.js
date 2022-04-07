import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/Menu'

export default function Home(){
  return(
     <div className="conteiner-home">

        <div className="logo">
           <img src="/Logo.png" alt="Link Logo"/>
            <h1> Meu Link + Curto :)</h1>
            <span>Colo seu link para encurtar👇</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={18} color="#FFF" />
            <input 
              placeholder='----'
            />                                   
        </div>
              
        <button>Encurtar Link</button>
       </div> 

        <Menu/>
    </div>      
  )
}