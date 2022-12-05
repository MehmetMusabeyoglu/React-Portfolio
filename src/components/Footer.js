import React from "react";
import { SiLinkedin, SiGithub, SiMedium } from "react-icons/si";

function Footer() {
    return (
        <footer>
            <div className="text-center">
            <a
                className="btn btn-floating mx-1 d-flex"
                href="https://www.linkedin.com/in/mehmet-musabeyoglu/"
                target="_blank"
                rel="noreferrer"
                role="button"
                alt="Linkedin icon"
            >
                <SiLinkedin color="white" size={10} />
            </a>
            <a
                className="btn btn-floating mx-1 d-flex"
                href="https://github.com/MehmetMusabeyoglu"
                target="_blank"
                rel="noreferrer"
                role="button"
                alt="GitHub icon"
            >
                <SiGithub color="white" size={10} />
            </a>
            <a
                className="btn btn-floating mx-1 d-flex"
                href="https://medium.com/@mehmetmusabeyoglu"
                target="_blank"
                rel="noreferrer"
                role="button"
                alt="Medium icon"
            >
                <SiMedium color="white" size={10} />
            </a>
            </div>
        </footer>
    )
}

export default Footer;