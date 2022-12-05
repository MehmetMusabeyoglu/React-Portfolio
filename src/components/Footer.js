import React from "react";
import { SiLinkedin, SiGithub, SiMedium } from "react-icons/si";

function Footer() {
    return (
        <footer>
            <div className="text-center pt-3">
            <a
                className="btn justify-content-md-center"
                href="https://www.linkedin.com/in/mehmet-musabeyoglu/"
                target="_blank"
                rel="noreferrer"
                role="button"
                alt="Linkedin icon"
            >
                <SiLinkedin color="white" size={25} />
            </a>
            <a
                className="btn justify-content-md-center"
                href="https://github.com/MehmetMusabeyoglu"
                target="_blank"
                rel="noreferrer"
                role="button"
                alt="GitHub icon"
            >
                <SiGithub color="white" size={25} />
            </a>
            <a
                className="btn justify-content-md-center"
                href="https://medium.com/@mehmetmusabeyoglu"
                target="_blank"
                rel="noreferrer"
                role="button"
                alt="Medium icon"
            >
                <SiMedium color="white" size={25} />
            </a>
            </div>
        </footer>
    )
}

export default Footer;