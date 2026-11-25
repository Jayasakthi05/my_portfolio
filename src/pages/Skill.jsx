import Skillcard from "../components/Skillcard";
import { FaHtml5,FaPython,FaGitAlt,FaJs, FaGithub,FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";


function Skill(){

    const tech =[
        {id:1,
         name:"Html",
         color: "#E34F26",
         icon:FaHtml5 
        },
        {
            id:2,
            name:"Css",
            color:"#1572B6",
            icon:IoLogoCss3
        },

        {
            id:3,
            name:"JavaScript",
            color:"#F7DF1E",
            icon:FaJs
        },

        {
             id:4,
             name:"Python",
             color:"#3776AB",
             icon:FaPython
        },

        {
            id:5,
            name:"Git",
            color:"#F05032",
            icon:FaGitAlt
        },

        {
            id:6,
            name:"Github",
            color:"#FFFFFF",
            icon:FaGithub
        },
        {
            id:7,
            name:"React.Js",
            color:"#61DAFB",
            icon:FaReact
        }
        
    ]
    return(
        <div className="s-card">
            <h2>Technologies</h2>

            <div className="color">
            {
                tech.map((e) =>
                    <Skillcard
                      key={e.id}
                      name={e.name}
                      icon={e.icon}
                      color={e.color}
                    
                    
                    />
                        
            )
            }
            </div>
            
        </div>
    );
}

export default Skill;