import { Link } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";

function Navbar() {
    return(
      <nav>
        <div className="navbar">
           <ul>
            <li className="logo">
              <Link to ="/">
               <FaUserGraduate size={28}/>
               <span>Jayasakthi</span>
              </Link>
            </li>
            
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/skill">Skill</Link></li>
            <li><Link to ="/project">Project</Link></li>
             
            <li><Link to ="/contact">Contact</Link></li>
           
           </ul>
           


        </div>
      </nav>
    );
    
}

export default Navbar;