import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


function Home() {
  return (
    
    <div className="home">

      <h1>Hello, I'm Jayasakthi!</h1>

      <h2>Computer Science Student</h2>

      <p>
        I am a third-year B.E. Computer Science student
        interested in web development and programming.
        I enjoy learning new technologies and building
        creative applications.
      </p>

      <div className="social-icons">
        <a href="https://www.instagram.com/sakthisubu_005/" target="_blank" rel="noreferrer">
        <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/jayasakthi-subramani-372a61327?utm_source=share_via&utm_content=profile&utm_medium=member_android"target="_blank" rel="noreferrer">
        <FaLinkedin />
        </a>

        <a href="https://github.com/Jayasakthi05" target="_blank" rel="noreferrer">
        <FaGithub />
        </a>

        <a href="mailto:sakthisubu005@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope />
        </a>
      </div>

    

    </div>
  );
}

export default Home;