import React from "react";
import Me from "../assets/Me.jpg";

function AboutMe() {
    return (
        <div>
            <h2 className="text-center text-light pt-3"> <b>Hello, world!</b></h2>
            <img className="text-center pt-3" style={{maxWidth: "275px" }} src={Me} alt="Me" ></img>
            <p className="text-center text-light pt-3"> I am Mehmet Musabeyoglu, a 26 years old software developer hailing from Turkiye and currently living in Sunnyvale, CA. 
            I received my bachelor's degree in electrical and electronics engineering, then completed U.C. Berkeley's full-stack software development bootcamp to pursue a career in software. 
            I am a hardworking team player always eager to learn from others and share my knowledge to the best of my ability. 
            Please don't hesitate to contact me for exciting new opportunities where I can contribute my skills and make a solid impact. </p>
        </div>
      );
}

export default AboutMe;