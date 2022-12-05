import React from "react";
import Me from "../assets/Me.jpg";

function AboutMe() {
    return (
        <div>
            <h2 className="text-center text-light pt-3"> <b>Welcome to my portfolio</b></h2>
            <img className="text-center pt-3" style={{maxWidth: "275px" }} src={Me} alt="Me" ></img>
            <p className="text-center text-light pt-3"> I am Mehmet Musabeyoglu. I am 26 years old. Formerly electrical and electronics engineer
            and currently full-stack developer. </p>
        </div>
      );
}

export default AboutMe;