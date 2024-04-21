import "../footer/Footer.css"
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


export const Footer = () => {
  return (
    <footer className="footer">
      <section className="section-around">
        <article>
          <h3 className="text-lg footer-copy">Copyright © 2024 Enzo Quinteros - Design by Enzo Quinteros</h3>
        </article>
        <article>
              <h3 className="text-lg">Seguinos en </h3>  
            <div className="redes">
              <a href="https://github.com/Enzoooss?tab=overview&from=2024-04-01&to=2024-04-19" target="_blank" className="social-icon"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/enzo-quinteros-30926a21a/" target="_blank" className="social-icon"><CiLinkedin /></a>
              <a href="https://www.instagram.com" target="_blank" className="social-icon"><FaInstagram /></a>
              <a href="https://twitter.com/home" target="_blank" className="social-icon"><BsTwitterX /></a>
            </div>
        </article>
      </section>
    </footer>
  )
}
